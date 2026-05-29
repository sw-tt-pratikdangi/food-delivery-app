const express = require('express');

const {
  createOrder,
  getMyOrders,
  updateOrderStatus,
} = require('../controllers/orderController');

const {
  protect,
} = require('../middleware/authMiddleware');

const {
  admin,
} = require('../middleware/adminMiddleware');

const router = express.Router();

router.post(
  '/',
  protect,
  createOrder
);

router.get(
  '/my-orders',
  protect,
  getMyOrders
);

router.put(
  '/:id',
  protect,
  admin,
  updateOrderStatus
);

module.exports = router;