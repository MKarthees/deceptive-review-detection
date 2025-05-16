import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context/Context'
import './thankyou.css'

const Thankyou = () => {
  const { slider, productId, setShowReview } = useContext(DataContext)
  const navigate = useNavigate()
  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="thankyou">
        <h1>You are Order Placed</h1>
        <h2>Thank You</h2>
        <button onClick={() => navigate('/shop')}>Go To Shopping</button>
      </section>
    </main>
  )
}

export default Thankyou
