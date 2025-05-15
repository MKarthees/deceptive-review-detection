import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { backendURL } from '../../App'
import { DataContext } from '../../Context/Context'
import './updateProduct.css'

const Product = ({ token }) => {
  const navigate = useNavigate()
  const { slider, setSlider, currency } = useContext(DataContext)
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  const [imgOne, setImgOne] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [offer, setOffer] = useState('')
  const [stock, setStock] = useState('Stock')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('Stock')
  const eachProduct = async () => {
    const response = await axios.get(backendURL + '/product/list', {
      headers: { token },
    })
    response.data.Products.map((item) => {
      if (item._id === productId) {
        setProduct(item)
        setName(item.name)
        setPrice(item.price)
        setOffer(item.offer)
        setBrand(item.brand)
        setDescription(item.description)
        return null
      }
    })
  }
  useEffect(() => {
    eachProduct()
  }, [])

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
      const response = await axios.put(
        backendURL + `/product/update/${productId}`,
        formData,
        {
          headers: { token },
        }
      )

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
  const deleteHandler = async () => {
    try {
      const response = await axios.delete(
        backendURL + `/product/delete/${productId}`,
        {
          headers: { token },
        }
      )
      if (response.data.result) {
        console.log(response.data.heed)
      }
      navigate('/')
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <main className="container">
      <h1>Product Update</h1>
      <section className="update-product">
        <form onSubmit={onSubmitHandler}>
          {/* left */}
          <div className="left">
            <div className="product-image">
              <input
                onChange={(e) => setImgOne(e.target.files[0])}
                type="file"
                id="file"
                hidden
              />
              {imgOne == '' ? (
                <label htmlFor="file">Upload Image</label>
              ) : (
                <img src={URL.createObjectURL(imgOne)} />
              )}
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
              <textarea value={description} placeholder="Beautiful Nice" />
            </div>
          </div>
          <div className="btn">
            <button onClick={deleteHandler} type="button">
              Delete
            </button>
            <NavLink to="/">
              <button type="button">Cancle</button>
            </NavLink>
            <button type="submit">Update</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Product
