import axios from 'axios'
import { useContext, useRef, useState } from 'react'
import { DataContext } from '../../Context/Context.jsx'
import Logo from '../../assets/Image/logo_1.png'
import { backendURL } from '../../App.jsx'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineLogout } from 'react-icons/hi'
import { HiMiniBars3CenterLeft, HiMiniXMark } from 'react-icons/hi2'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = ({ token, setToken }) => {
  const { searchBar, setSearchBar, userInput, setUserInput } =
    useContext(DataContext)
  const navigate = useNavigate()
  const navList = useRef(null)
  const bar = useRef(null)
  const nav = useRef(null)
  const logo = useRef(null)
  const userIcon = useRef(null)
  const location = useLocation()
  if (location.pathname == '/') {
    setSearchBar(true)
  } else {
    setSearchBar(false)
  }
  const linkOpen = () => {
    navList.current.style.display = 'flex'
    nav.current.style.display = 'flex'
    bar.current.style.display = 'none'
    userIcon.current.style.display = 'none'
    logo.current.style.display = 'none'
  }
  const linkClose = () => {
    navList.current.style.display = 'none'
    nav.current.style.display = 'grid'
    bar.current.style.display = 'block'
    userIcon.current.style.display = 'flex'
    logo.current.style.display = 'flex'
  }
  const logoutHandler = async () => {
    try {
      const response = await axios.post(backendURL + '/user/logout')
      console.log(response)
      if (response.data.result) {
        localStorage.clear()
        setToken('')
        navigate('/login')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="navbar-container">
      <nav ref={nav}>
        <img src={Logo} ref={logo} className="logo" />

        <div
          className={`${searchBar === false ? 'display-none' : 'search-box'}`}
        >
          <input
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            placeholder="Search"
          />
          <i>
            <FiSearch />
          </i>
        </div>
        <div className="bars" ref={bar} onClick={linkOpen}>
          <HiMiniBars3CenterLeft />
        </div>
        <ul ref={navList}>
          <i onClick={linkClose}>
            <HiMiniXMark />
          </i>

          <NavLink to="/">
            <li>Collection</li>
          </NavLink>
          <NavLink to="/add">
            <li>Add Product</li>
          </NavLink>
          <NavLink to="/review">
            <li>Reviews</li>
          </NavLink>
          {/* <NavLink to="/order">
            <li>Orders</li>
          </NavLink> */}
          {/* <NavLink to="/dashboard">
            <li>Dashboard</li>
          </NavLink> */}
        </ul>
        <div ref={userIcon} className="user-icons">
          <i onClick={logoutHandler}>
            <HiOutlineLogout />
          </i>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
