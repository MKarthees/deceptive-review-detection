import React, { useContext, useState } from 'react'
import { DataContext } from '../../Context/Context'
import './addProduct.css'
import axios from 'axios'
import { backendURL } from '../../App'
import { NavLink } from 'react-router-dom'

const AddProduct = ({ token }) => {
  const [imgOne, setImgOne] = useState(false)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [offer, setOffer] = useState('')
  const [stock, setStock] = useState('Stock')
  const [brand, setBrand] = useState('Stars')
  const [category, setCategory] = useState('Bangle')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', price)
      formData.append('description', description)
      formData.append('stock', stock)
      formData.append('brand', brand)
      formData.append('category', category)
      formData.append('offer', offer)
      imgOne && formData.append('imgOne', imgOne)
      const response = await axios.post(backendURL + '/product/add', formData, {
        headers: { token },
      })

      if (response.data.result) {
        setImgOne(false)
        setName('')
        setPrice('')
        setDescription('')
        setOffer('')
        console.log(response.data.heed)
      } else {
        console.log(response.data.mistake)
      }
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <main className="container">
      <h1>Product Add</h1>
      <section className="add-product">
        <form onSubmit={onSubmitHandler}>
          {/* left */}
          <div className="left">
            <div className="product-image">
              {!imgOne ? (
                <label htmlFor="file">Upload Image</label>
              ) : (
                <img src={URL.createObjectURL(imgOne)} />
              )}
              <input
                onChange={(e) => setImgOne(e.target.files[0])}
                type="file"
                id="file"
                hidden
              />
            </div>
            <div className="price-offer">
              <div className="price-offer-box">
                <label>Price</label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  type="number"
                  placeholder="₹ 100"
                />
              </div>
              <div className="price-offer-box">
                <label>Offer</label>
                <input
                  onChange={(e) => setOffer(e.target.value)}
                  value={offer}
                  type="number"
                  placeholder="20 %"
                />
              </div>
            </div>
            <div className="brand">
              <label>Brand</label>
              <input
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                type="text"
                placeholder="Stars"
              />
            </div>
          </div>
          {/* right */}
          <div className="right">
            <div className="name">
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Elegance Bangle"
              />
            </div>
            <div className="stock-category">
              <div className="stock">
                <label>Stock</label>
                <div className="stock-box">
                  <input
                    name="stock"
                    id="instock"
                    type="radio"
                    value="Stock"
                    onChange={(e) => setStock(e.target.value)}
                  />
                  <label htmlFor="instock">In Stock</label>
                </div>
                <div className="stock-box">
                  <input
                    name="stock"
                    id="outofstock"
                    type="radio"
                    value="No Stock"
                    onChange={(e) => setStock(e.target.value)}
                  />
                  <label htmlFor="outofstock">Out Of Stock</label>
                </div>
              </div>
              <div className="category">
                <label>Category</label>
                <select onChange={(e) => setCategory(e.target.value)}>
                  <option value="Bangle">Bangle</option>
                  <option value="Wallet">Wallet</option>
                </select>
              </div>
            </div>
            <div className="description">
              <label>Description</label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Beautiful Nice"
              />
            </div>
          </div>
          <div className="btn">
            <NavLink to="/">
              <button type="button">Cancle</button>
            </NavLink>
            <button type="submit">Add</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default AddProduct
