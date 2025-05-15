import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  offer: {
    type: Number,
    required: true,
  },
})

export const Product = mongoose.model('Product', productSchema)
