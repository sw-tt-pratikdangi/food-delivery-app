const Order = require('../models/Order');


// PLACE ORDER
const createOrder = async (
  req,
  res
) => {
  try {
    const {
      items,
      totalPrice,
      deliveryAddress,
    } = req.body;

    const order =
      await Order.create({
        user: req.user._id,
        items,
        totalPrice,
        deliveryAddress,
      });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET MY ORDERS
const getMyOrders = async (
  req,
  res
) => {
  try {
    const orders =
      await Order.find({
        user: req.user._id,
      }).sort({
        createdAt: -1,
      });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateOrderStatus =
  async (req, res) => {
    try {
      const order =
        await Order.findById(
          req.params.id
        );

      if (!order) {
        return res
          .status(404)
          .json({
            message:
              'Order not found',
          });
      }

      order.orderStatus =
        req.body.orderStatus;

      const updatedOrder =
        await order.save();

      res.json(updatedOrder);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  createOrder,
  getMyOrders,
  updateOrderStatus,
};