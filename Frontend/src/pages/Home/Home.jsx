import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'

import { DataContext } from '../../Context/Context'
import { backendURL } from '../../App'
import { useNavigate } from 'react-router-dom'

const Home = ({ token }) => {
  const { slider, setSlider, currency } = useContext(DataContext)
  const [product, setProduct] = useState([])
  const navigate = useNavigate()

  const getProduct = async () => {
    const response = await axios.get(backendURL + '/product/list', {
      headers: { token },
    })
    setProduct(response.data.Products)
  }
  useEffect(() => {
    getProduct()
  }, [])

  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="hero">
        {/* <div className="offer">
          <h1>20% Today Offer</h1>
        </div> */}
        <div className="top-product">
          <h1>Top Product</h1>
          <div className="products">
            {product.slice(0, 4).map((item, index) => (
              <div
                className="each-product"
                key={index}
                onClick={() => {
                  navigate('/shop')
                }}
              >
                <img src={item.image[0]} alt="" />
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>
                    {currency} {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="offer-product">
          <h1>Offer Product</h1>
          <div className="products">
            {product.slice(10, 14).map((item, index) => (
              <div
                className="each-product"
                key={index}
                onClick={() => {
                  navigate('/shop')
                }}
              >
                <img src={item.image[0]} alt="" />
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>
                    {currency} {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
