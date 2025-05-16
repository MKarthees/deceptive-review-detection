import axios from 'axios'
import { useContext, useRef } from 'react'
import { DataContext } from '../../Context/Context.jsx'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { backendURL } from '../../App.jsx'
import './navbar.css'
import Logo from '../../assets/images/logo_1.png'
import { FiSearch } from 'react-icons/fi'
import {
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineLogout,
} from 'react-icons/hi'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'

const Navbar = ({ token, setToken }) => {
  const {
    searchBar,
    setSearchBar,
    slider,
    setSlider,
    userInput,
    setUserInput,
  } = useContext(DataContext)
  const barIcon = useRef()
  const location = useLocation()
  const navigate = useNavigate()
  if (location.pathname === '/shop') {
    setSearchBar(true)
  } else {
    setSearchBar(false)
  }

  const logoutHandler = async () => {
    try {
      const response = await axios.post(backendURL + '/user/logout')

      if (response.data.result) {
        localStorage.clear()
        setToken('')
        navigate('/login')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const barClickHandler = () => {
    setSlider(true)
  }
  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="navbar">
        <div className="navbar-container">
          <nav>
            <div
              ref={barIcon}
              className={`${slider == true ? 'visibility' : 'bars'}`}
            >
              <i onClick={barClickHandler}>
                <HiMiniBars3CenterLeft />
              </i>
            </div>
            <div
              className={`${
                location.pathname === '/shop' ? 'display-none' : 'logo'
              }`}
            >
              <img src={Logo} />
            </div>

            <div
              className={`${
                searchBar === false ? 'display-none' : 'search-box'
              }`}
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
            <div className="user-icons">
              {/* <i className="cart-icon">
            <HiOutlineShoppingCart />
            <p>0</p>
          </i> */}
              <NavLink to="login">
                {token === '' ? (
                  <i>
                    <HiOutlineUser />
                  </i>
                ) : (
                  <i onClick={logoutHandler}>
                    <HiOutlineLogout />
                  </i>
                )}
              </NavLink>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}

export default Navbar
