import { Review } from '../models/reviewModel.js'

export const addReview = async (req, res) => {
  try {
    const productId = req.params.id
    const { review, name } = req.body
    const newReview = new Review({
      name,
      review,
      productId,
    })
    await newReview.save()

    res.json({
      heed: 'Review successfully submitted.',
      result: true,
    })
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}

export const allReview = async (req, res) => {
  try {
    const reviews = await Review.find({})
    res.json({
      heed: 'All Review have been fetched successfully',
      result: true,
      reviews,
    })
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}
