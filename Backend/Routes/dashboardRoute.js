const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getSalesAnalytics,
  getCategoryStats,
  getProductStats,
  getUserStats,
  getRecentOrders,
  getRecentProducts,
  getRecentActivity,
  globalSearch,
} = require("../Api/Controller/dashboardController");

router.get("/stats", getDashboardStats);
router.get("/sales", getSalesAnalytics);
router.get("/categories", getCategoryStats);
router.get("/product-stats", getProductStats);
router.get("/user-stats", getUserStats);
router.get("/recent-orders", getRecentOrders);
router.get("/recent-products", getRecentProducts);
router.get("/activity", getRecentActivity);
router.get("/search", globalSearch);

module.exports = router;
