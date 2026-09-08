const orderModel = require('../Models/orderModel');
const productModel = require('../Models/productModels');
const activityModel = require('../Models/activityModel');

module.exports = {

    // POST - create a new order
    createOrder: async function (req, res) {
        try {
            const order = await orderModel.create(req.body);

            // Best-effort stock decrement for each ordered product
            if (Array.isArray(order.products)) {
                for (const item of order.products) {
                    if (item.product) {
                        await productModel.findByIdAndUpdate(item.product, {
                            $inc: { Stock: -Math.abs(item.quantity || 1) }
                        });
                    }
                }
            }

            activityModel.log(
                'ORDER_CREATED',
                `New order received from ${order.customerName} - $${order.totalAmount}`,
                { orderId: order._id }
            );

            res.status(201).json(order);
        } catch (err) {
            res.status(500).json({ message: "Oops! Something went wrong: " + err.message });
        }
    },

    // GET all orders (supports optional ?status= and ?search= query filters)
    getOrders: async function (req, res) {
        try {
            const filter = {};
            if (req.query.status) filter.status = req.query.status;
            if (req.query.search) {
                filter.$or = [
                    { customerName: { $regex: req.query.search, $options: 'i' } },
                    { email: { $regex: req.query.search, $options: 'i' } },
                ];
            }

            const orders = await orderModel.find(filter).sort({ createdAt: -1 });
            res.json(orders);
        } catch (err) {
            res.status(500).json({ message: "Oops! Something went wrong: " + err.message });
        }
    },

    // GET a single order
    getSingleOrder: async function (req, res) {
        try {
            const order = await orderModel.findById(req.params.id);
            res.json(order);
        } catch (err) {
            res.status(500).json({ message: "Oops! Something went wrong: " + err.message });
        }
    },

    // PUT - update order status (Pending / Processing / Shipped / Delivered / Cancelled)
    updateOrderStatus: async function (req, res) {
        try {
            const order = await orderModel.findByIdAndUpdate(
                req.params.id,
                { status: req.body.status },
                { new: true }
            );

            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }

            activityModel.log(
                'ORDER_STATUS_CHANGED',
                `Order #${order._id.toString().slice(-6)} status changed to ${order.status}`,
                { orderId: order._id, status: order.status }
            );

            res.json(order);
        } catch (err) {
            res.status(500).json({ message: "Oops! Something went wrong: " + err.message });
        }
    },

    // DELETE
    deleteOrder: async function (req, res) {
        try {
            await orderModel.findByIdAndDelete(req.params.id);
            res.json({ message: "Order deleted successfully" });
        } catch (err) {
            res.status(500).json({ message: "Oops! Something went wrong: " + err.message });
        }
    },

};
