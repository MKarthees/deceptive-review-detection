import express from 'express'
import { addReview, allReview } from '../Controller/reviewController.js'
const reviewRoute = express.Router()
reviewRoute.get('/list', allReview)
reviewRoute.post('/add/:id', addReview)

export default reviewRoute
