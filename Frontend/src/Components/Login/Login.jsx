import React, { useContext, useState } from 'react'
import { DataContext } from '../../Context/Context'
import axios from 'axios'
import './login.css'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { backendURL } from '../../App'

const Login = ({ setToken }) => {
  const { slider, setSlider } = useContext(DataContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const getUser = async () => {
    try {
      const user = await axios.post(backendURL + '/user/login', {
        email,
        password,
      })

      if (user.data.result) {
        setToken(user.data.token)
        navigate('/')
      } else {
        console.log('Please Register')
      }
    } catch (error) {
      console.error(error.message)
    }
    setEmail('')
    setPassword('')
  }

  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="login">
        <h1>Login</h1>
        <div className="data-box">
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={getUser}>Submit</button>
        </div>
        <div className="details">
          <p>Don't Have Account?</p>
          <NavLink to="/register">
            <p>Click Here</p>
          </NavLink>
        </div>
      </section>
    </main>
  )
}

export default Login
