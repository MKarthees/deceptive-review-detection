import express from 'express'
import { newOrderController } from '../Controller/orderController.js'

const orderRoute = express.Router()
orderRoute.post('/new-order', newOrderController)
export default orderRoute
