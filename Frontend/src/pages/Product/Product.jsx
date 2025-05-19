import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { backendURL } from '../../App'
import { DataContext } from '../../Context/Context'
import './product.css'

const Product = ({ token }) => {
  const {
    slider,
    setSlider,
    currency,
    userInput,
    showReview,
    setShowReview,
    setProductId,
  } = useContext(DataContext)
  const navigate = useNavigate()
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
  const [review, setReview] = useState([])
  const [allReview, setAllReview] = useState([])
  const [reviewId, setReviewId] = useState('')

  const eachProduct = async () => {
    const response = await axios.get(backendURL + '/product/list', {
      headers: { token },
    })
    response.data.Products.map((item) => {
      if (item._id === productId) {
        setProduct(item)
        setName(item.name)
        setImgOne(item.image[0])
        setPrice(item.price)
        setOffer(item.offer)
        setBrand(item.brand)
        setDescription(item.description)
        return null
      }
    })
  }
  const eachReview = async () => {
    const response = await axios.get(backendURL + '/review/list')
    setAllReview(response.data.reviews)
    allReview.map((item) => {
      setReviewId(item.productId)
    })
  }

  const buyHandler = () => {
    setProductId(productId)
    navigate('/order')
  }
  const reviewHandler = async () => {
    const response = await axios.post(backendURL + `/review/add/${productId}`, {
      name,
      review,
    })
    setShowReview(false)
  }

  useEffect(() => {
    eachProduct()
    eachReview()
  }, [allReview])

  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="product">
        <div className="product-details">
          <div className="left">
            <img src={imgOne} alt="" />
          </div>
          <div className="right">
            <div className="name-price">
              <h1>{name}</h1>
              <h1>
                {currency}
                {price}
              </h1>
            </div>
            <div className="product-description">
              <p>{description}</p>
            </div>
            <div className="offer-buy">
              <h2>{offer}%</h2>
              <button onClick={buyHandler}>Buy</button>
            </div>
          </div>
        </div>
        {productId == reviewId ? (
          <div className="review-container">
            <h1>Reviews</h1>

            {allReview.map((item, index) => (
              <div className="reviews" key={index}>
                <h4>{item.name}</h4>
                <p>{item.review}</p>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}

        {showReview == false ? (
          ''
        ) : (
          <div className="review">
            <h4>Please Leave Review</h4>
            <input
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Enter Review"
            />
            <button onClick={reviewHandler}>Submit</button>
          </div>
        )}
      </section>
    </main>
  )
}

export default Product
