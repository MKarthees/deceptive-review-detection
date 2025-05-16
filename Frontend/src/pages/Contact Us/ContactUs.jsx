import React, { useContext } from "react";
import { DataContext } from "../../Context/Context";
import "./contactUs.css";

const ContactUs = () => {
  const { slider, setSlider } = useContext(DataContext);
  return (
    <main className={`${slider == true ? "container" : "grid"}`}>
      <section className="contact">
        <h1>Contact Us Page</h1>
      </section>
    </main>
  );
};

export default ContactUs;
