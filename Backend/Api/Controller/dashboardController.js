const productModel = require("../Models/productModels");
const categoryModel = require("../Models/categoryModels");
const userModel = require("../Models/userModel");
const orderModel = require("../Models/orderModel");
const activityModel = require("../Models/activityModel");

// ---------- small date helpers ----------
function startOfDay(d = new Date()) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function endOfDay(d = new Date()) {
  const x = new Date(d);
  x.setHours(23, 59, 59, 999);
  return x;
}
function startOfWeek(d = new Date()) {
  const x = startOfDay(d);
  const day = x.getDay(); // 0 = Sunday
  x.setDate(x.getDate() - day);
  return x;
}
function startOfMonth(d = new Date()) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function daysAgo(n) {
  const x = startOfDay();
  x.setDate(x.getDate() - n);
  return x;
}
function monthsAgo(n) {
  const x = new Date();
  x.setMonth(x.getMonth() - n);
  return startOfDay(x);
}

async function sumRevenue(match) {
  const result = await orderModel.aggregate([
    { $match: match },
    { $group: { _id: null, revenue: { $sum: "$totalAmount" } } },
  ]);
  return result.length > 0 ? result[0].revenue : 0;
}

// =====================================================
// GET /api/dashboard/stats  - overview statistic cards
// =====================================================
const getDashboardStats = async (req, res) => {
  try {
    const [
      totalProducts,
      totalCategories,
      totalUsers,
      totalOrders,
      pendingOrders,
      processingOrders,
      shippedOrders,
      completedOrders,
      cancelledOrders,
      lowStockProducts,
      outOfStockProducts,
    ] = await Promise.all([
      productModel.countDocuments(),
      categoryModel.countDocuments(),
      userModel.countDocuments(),
      orderModel.countDocuments(),
      orderModel.countDocuments({ status: "Pending" }),
      orderModel.countDocuments({ status: "Processing" }),
      orderModel.countDocuments({ status: "Shipped" }),
      orderModel.countDocuments({ status: "Delivered" }),
      orderModel.countDocuments({ status: "Cancelled" }),
      productModel.countDocuments({ Stock: { $gt: 0, $lte: 10 } }),
      productModel.countDocuments({ Stock: { $lte: 0 } }),
    ]);

    // Revenue is counted from any non-cancelled order so the number
    // reflects real (completed + in-progress) sales.
    const totalRevenue = await sumRevenue({ status: { $ne: "Cancelled" } });
    const todayRevenue = await sumRevenue({
      status: { $ne: "Cancelled" },
      createdAt: { $gte: startOfDay(), $lte: endOfDay() },
    });
    const monthlyRevenue = await sumRevenue({
      status: { $ne: "Cancelled" },
      createdAt: { $gte: startOfMonth() },
    });

    const todayOrders = await orderModel.countDocuments({
      createdAt: { $gte: startOfDay(), $lte: endOfDay() },
    });

    res.status(200).json({
      success: true,
      statistics: {
        totalProducts,
        totalCategories,
        totalUsers,
        totalOrders,

        totalRevenue,
        todayRevenue,
        monthlyRevenue,

        pendingOrders,
        processingOrders,
        shippedOrders,
        completedOrders, // Delivered
        cancelledOrders,

        lowStockProducts,
        outOfStockProducts,

        todayOrders,
      },
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard statistics",
      error: error.message,
    });
  }
};

// =====================================================
// GET /api/dashboard/sales?range=today|7d|30d|6m|1y
// Sales analytics + a chart-ready trend series
// =====================================================
const getSalesAnalytics = async (req, res) => {
  try {
    const range = req.query.range || "7d";

    let from;
    let groupFormat; // date format used to bucket the trend line
    switch (range) {
      case "today":
        from = startOfDay();
        groupFormat = "%Y-%m-%d %H:00";
        break;
      case "30d":
        from = daysAgo(30);
        groupFormat = "%Y-%m-%d";
        break;
      case "6m":
        from = monthsAgo(6);
        groupFormat = "%Y-%m";
        break;
      case "1y":
        from = monthsAgo(12);
        groupFormat = "%Y-%m";
        break;
      case "7d":
      default:
        from = daysAgo(7);
        groupFormat = "%Y-%m-%d";
        break;
    }

    const trend = await orderModel.aggregate([
      {
        $match: {
          status: { $ne: "Cancelled" },
          createdAt: { $gte: from },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: groupFormat, date: "$createdAt" } },
          revenue: { $sum: "$totalAmount" },
          orders: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
      { $project: { _id: 0, label: "$_id", revenue: 1, orders: 1 } },
    ]);

    const [totalRevenue, todaySales, weekSales, monthSales, totalOrders] =
      await Promise.all([
        sumRevenue({ status: { $ne: "Cancelled" } }),
        sumRevenue({
          status: { $ne: "Cancelled" },
          createdAt: { $gte: startOfDay(), $lte: endOfDay() },
        }),
        sumRevenue({
          status: { $ne: "Cancelled" },
          createdAt: { $gte: startOfWeek() },
        }),
        sumRevenue({
          status: { $ne: "Cancelled" },
          createdAt: { $gte: startOfMonth() },
        }),
        orderModel.countDocuments({ status: { $ne: "Cancelled" } }),
      ]);

    const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    res.status(200).json({
      success: true,
      range,
      summary: {
        totalRevenue,
        todaySales,
        weekSales,
        monthSales,
        totalOrders,
        averageOrderValue,
      },
      trend,
    });
  } catch (error) {
    console.error("Dashboard sales error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load sales analytics",
      error: error.message,
    });
  }
};

// =====================================================
// GET /api/dashboard/categories - category distribution
// =====================================================
const getCategoryStats = async (req, res) => {
  try {
    const categories = await categoryModel.find().sort({ createdAt: -1 });

    // Count products per category. Category on a product may be stored as
    // either the Categories _id or the category name, so match on both.
    const distribution = await Promise.all(
      categories.map(async (cat) => {
        const count = await productModel.countDocuments({
          $or: [{ Category: cat._id.toString() }, { Category: cat.Name }],
        });
        return {
          id: cat._id,
          name: cat.Name,
          productCount: count,
          createdAt: cat.createdAt,
        };
      })
    );

    const totalCategories = categories.length;
    const mostPopulated =
      distribution.length > 0
        ? distribution.reduce((a, b) => (b.productCount > a.productCount ? b : a))
        : null;

    const recentCategories = [...distribution]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5);

    res.status(200).json({
      success: true,
      totalCategories,
      mostPopulated,
      distribution,
      recentCategories,
    });
  } catch (error) {
    console.error("Dashboard categories error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load category statistics",
      error: error.message,
    });
  }
};

// =====================================================
// GET /api/dashboard/product-stats
// =====================================================
const getProductStats = async (req, res) => {
  try {
    const [
      totalProducts,
      activeProducts,
      inactiveProducts,
      lowStockProducts,
      outOfStockProducts,
      recentProducts,
      byCategoryRaw,
    ] = await Promise.all([
      productModel.countDocuments(),
      productModel.countDocuments({ Status: "Active" }),
      productModel.countDocuments({ Status: "Inactive" }),
      productModel.countDocuments({ Stock: { $gt: 0, $lte: 10 } }),
      productModel.countDocuments({ Stock: { $lte: 0 } }),
      productModel.find().sort({ createdAt: -1 }).limit(5),
      productModel.aggregate([
        { $group: { _id: "$Category", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
    ]);

    res.status(200).json({
      success: true,
      totalProducts,
      activeProducts,
      inactiveProducts,
      lowStockProducts,
      outOfStockProducts,
      recentProducts,
      byCategory: byCategoryRaw.map((c) => ({
        category: c._id || "Uncategorized",
        count: c.count,
      })),
    });
  } catch (error) {
    console.error("Dashboard product stats error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load product statistics",
      error: error.message,
    });
  }
};

// =====================================================
// GET /api/dashboard/user-stats
// =====================================================
const getUserStats = async (req, res) => {
  try {
    const [totalUsers, activeUsers, newThisWeek, trendRaw] = await Promise.all([
      userModel.countDocuments(),
      userModel.countDocuments({ status: "Active" }),
      userModel.countDocuments({ createdAt: { $gte: startOfWeek() } }),
      userModel.aggregate([
        { $match: { createdAt: { $gte: daysAgo(30) } } },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ]),
    ]);

    res.status(200).json({
      success: true,
      totalUsers,
      activeUsers,
      newThisWeek,
      registrationTrend: trendRaw.map((t) => ({ label: t._id, count: t.count })),
    });
  } catch (error) {
    console.error("Dashboard user stats error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load user statistics",
      error: error.message,
    });
  }
};

// =====================================================
// GET /api/dashboard/recent-orders
// =====================================================
const getRecentOrders = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const orders = await orderModel.find().sort({ createdAt: -1 }).limit(limit);
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =====================================================
// GET /api/dashboard/recent-products
// =====================================================
const getRecentProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const products = await productModel.find().sort({ createdAt: -1 }).limit(limit);
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =====================================================
// GET /api/dashboard/activity
// =====================================================
const getRecentActivity = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 15;
    const activity = await activityModel.find().sort({ createdAt: -1 }).limit(limit);
    res.status(200).json({ success: true, activity });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =====================================================
// GET /api/dashboard/search?q=... - global admin search
// =====================================================
const globalSearch = async (req, res) => {
  try {
    const q = req.query.q || "";
    if (!q.trim()) {
      return res.status(200).json({
        success: true,
        products: [],
        categories: [],
        users: [],
        orders: [],
      });
    }
    const regex = { $regex: q, $options: "i" };

    const [products, categories, users, orders] = await Promise.all([
      productModel.find({ Name: regex }).limit(10),
      categoryModel.find({ Name: regex }).limit(10),
      userModel.find({ $or: [{ name: regex }, { email: regex }] }).select("-password -otp -otpExpires").limit(10),
      orderModel.find({ $or: [{ customerName: regex }, { email: regex }] }).limit(10),
    ]);

    res.status(200).json({ success: true, products, categories, users, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getDashboardStats,
  getSalesAnalytics,
  getCategoryStats,
  getProductStats,
  getUserStats,
  getRecentOrders,
  getRecentProducts,
  getRecentActivity,
  globalSearch,
};
