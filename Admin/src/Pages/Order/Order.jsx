import React, { useContext } from 'react'
import { DataContext } from '../../Context/Context'
import './order.css'

const Order = () => {
  const { slider, setSlider } = useContext(DataContext)
  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="order">
        <h1>Orders Page</h1>
      </section>
    </main>
  )
}

export default Order
