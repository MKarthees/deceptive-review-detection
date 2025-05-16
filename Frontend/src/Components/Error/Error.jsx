import React, { useContext } from 'react'
import { DataContext } from '../../Context/Context.jsx'
import './error.css'
const Error = () => {
  const { slider, setSlider } = useContext(DataContext)
  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="error">
        <h1>404 Error | Page Not Found</h1>
      </section>
    </main>
  )
}

export default Error
