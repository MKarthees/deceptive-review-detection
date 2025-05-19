import React, { useContext } from 'react'
import { DataContext } from '../../Context/Context'
import './contactUs.css'
import banner from '../../assets/images/Banner.jpg'
import { RiContactsFill } from 'react-icons/ri'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const ContactUs = () => {
  const { slider, setSlider } = useContext(DataContext)
  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="contact">
        <h1>Contact Us</h1>
        <img src={banner} />

        <br />
        <div className="address">
          <div className="address-details">
            <p>
              <i>
                <FaPhoneAlt />
              </i>
              Phone: +91 97860 71388
            </p>
            <p>
              <i>
                <FaLocationDot />
              </i>
              Address: Star's Footwears | 358, Railway Feeder Road,
              Virudhunagar, Tamilnadu, 626001, India
            </p>
          </div>
          <div className="address-icon">
            <i>
              <RiContactsFill />
            </i>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactUs
