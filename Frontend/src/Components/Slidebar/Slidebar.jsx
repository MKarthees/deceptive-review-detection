import React, { useContext } from 'react'
import './slidebar.css'
import { HiMiniBars3CenterLeft, HiMiniXMark } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../Context/Context'

const Slidebar = () => {
  const { slider, setSlider } = useContext(DataContext)

  return (
    <div>
      <aside>
        <div className={`${slider === true ? 'slider-open' : 'slider-close'}`}>
          <ul>
            <i onClick={() => setSlider(false)}>
              <HiMiniXMark />
            </i>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="shop">
              <li>Shop</li>
            </NavLink>

            <NavLink to="contact-us">
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Slidebar
