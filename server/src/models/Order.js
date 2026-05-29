const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    items: [
      {
        title: String,
        price: Number,
        image: String,
        quantity: Number,
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
    },

    deliveryAddress: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      default: 'COD',
    },

    orderStatus: {
      type: String,
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  'Order',
  orderSchema
);