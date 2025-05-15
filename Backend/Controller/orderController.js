import { Order } from '../models/orderModel.js'

export const newOrderController = async (req, res) => {
  try {
    const { name, address, phoneNo, productId } = req.body
    const newOrder = new Order({
      name,
      address,
      phoneNo,
      productId,
    })
    await newOrder.save()
    res.json({
      heed: 'Order successfully added to the database.',
      result: true,
    })
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}
