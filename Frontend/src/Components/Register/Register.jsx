import React, { useContext, useState } from 'react'
import { DataContext } from '../../Context/Context'
import axios from 'axios'
import './register.css'
import { NavLink } from 'react-router-dom'
import { backendURL } from '../../App'

const Register = () => {
  const { slider, setSlider } = useContext(DataContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const newUser = async () => {
    try {
      const user = await axios.post(backendURL + 'user/register', {
        name,
        email,
        password,
      })
    } catch (error) {
      console.error(error)
    }
    setName('')
    setEmail('')
    setPassword('')
  }
  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="register">
        <h1>Register</h1>
        <div className="data-box">
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button onClick={newUser}>Submit</button>
        </div>
        <div className="details">
          <p>Already Have Account?</p>
          <NavLink to="/login">
            <p>Click Here</p>
          </NavLink>
        </div>
      </section>
    </main>
  )
}

export default Register
