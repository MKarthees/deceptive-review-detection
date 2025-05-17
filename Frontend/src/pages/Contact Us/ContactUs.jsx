import React, { useContext } from 'react'
import { DataContext } from '../../Context/Context'
import './contactUs.css'

const ContactUs = () => {
  const { slider, setSlider } = useContext(DataContext)
  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="contact">
        <h1>Contact Us</h1>
        <p>
          எங்களுடன் தொடர்பு கொள்ளுங்கள்! உங்களிடம் ஏதேனும் கேள்விகள், கருத்துகள்
          அல்லது சந்தேகங்கள் இருந்தால், கீழே உள்ள விவரங்களைப் பயன்படுத்தி எங்களை
          தொடர்பு கொள்ளலாம். உங்கள் கருத்துகளை நாங்கள் மதிக்கிறோம் மற்றும்
          விரைவில் பதிலளிக்க முயற்சிக்கிறோம்.
        </p>
        <br />
        <div className="address">
          <p>
            Phone: +91 97860 71388 <br /> Address: Star's Footwears | 358,
            Railway Feeder Road, Virudhunagar, Tamilnadu, 626001, India
          </p>
        </div>
      </section>
    </main>
  )
}

export default ContactUs
