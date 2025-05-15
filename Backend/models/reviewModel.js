import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  review: {
    type: String,
  },
  productId: {
    type: String,
    required: true,
  },
})

export const Review = mongoose.model('Review', reviewSchema)
