import React, { useContext } from 'react'
import axios from 'axios'
import { DataContext } from '../../Context/Context'
import './review.css'
import { backendURL } from '../../App'
import { useState } from 'react'
import { useEffect } from 'react'

const Review = () => {
  const { slider, setSlider } = useContext(DataContext)
  const [review, setReview] = useState([])
  const [allReview, setAllReview] = useState([])
  const [reviewId, setReviewId] = useState('')
  const eachReview = async () => {
    const response = await axios.get(backendURL + '/review/list')
    setAllReview(response.data.reviews)
    allReview.map((item) => {
      setReviewId(item.productId)
    })
  }
  useEffect(() => {
    eachReview()
  }, [allReview])

  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="review">
        <div className="review-container">
          <h1>Reviews</h1>

          {allReview.map((item, index) => (
            <div className="reviews" key={index}>
              <h4>{item.name}</h4>
              <p>{item.review}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Review
