import { v2 as cloudinary } from 'cloudinary'
import { Product } from '../models/productModel.js'

export const listController = async (req, res) => {
  try {
    const Products = await Product.find({})
    res.json({
      heed: 'All products have been fetched successfully',
      result: true,
      Products,
    })
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}
export const addController = async (req, res) => {
  try {
    const { name, price, description, category, stock, brand, offer } = req.body
    const imgOne = req.files.imgOne && req.files.imgOne[0]
    const images = [imgOne].filter((item) => item !== undefined)
    let imgURL = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path)
        return result.secure_url
      })
    )

    const newProduct = new Product({
      name,
      price,
      description,
      category,
      stock,
      brand,
      offer,
      image: imgURL,
    })
    await newProduct.save()

    res.json({
      heed: 'Product successfully added to the database.',
      result: true,
    })
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}

export const updateController = async (req, res) => {
  try {
    const productId = req.params.id
    const { name, price, description, category, stock, brand, offer } = req.body
    const imgOne = req.files.imgOne && req.files.imgOne[0]
    const images = [imgOne].filter((item) => item !== undefined)
    let imgURL = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path)
        return result.secure_url
      })
    )

    const updateProduct = await Product.findByIdAndUpdate(productId, {
      name,
      price,
      description,
      category,
      stock,
      brand,
      offer,
      image: imgURL,
    })
    await updateProduct.save()
    res.json({
      heed: 'Product update  successfully',
      result: true,
      updateProduct,
    })
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}
export const deleteController = async (req, res) => {
  try {
    const productId = req.params.id
    const deleteProduct = await Product.findByIdAndDelete(productId)
    res.json({
      heed: 'Product delete successfully',
      result: true,
    })
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}
export const oneItemController = async (req, res) => {
  try {
    const productName = req.body
    const findProduct = await Product.findOne(productName)

    res.json({
      heed: 'Product Found',
      result: true,
      findProduct,
    })
  } catch (error) {
    res.json({
      mistake: error.message,
      result: false,
    })
  }
}
