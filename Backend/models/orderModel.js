import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  productId: {
    type: String,
  },
})

export const Order = mongoose.model('Order', orderSchema)
