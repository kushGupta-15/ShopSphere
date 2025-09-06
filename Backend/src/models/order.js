const mongoose = require('mongoose');

// Sub-schema for order items
const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true }
}, { _id: false });

// Main order schema
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  total: { type: Number, required: true },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    pinCode: String
  },
  paymentMethod: { type: String, enum: ['cod', 'card', 'upi'], default: 'cod' },
  paymentStatus: { type: String, enum: ['pending', 'paid'], default: 'pending' },
  orderStatus: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  deliveredAt: Date
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order, orderSchema, orderItemSchema };


