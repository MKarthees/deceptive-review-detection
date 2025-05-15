import React, { useContext } from "react";
import { DataContext } from "../../Context/Context";
import "./review.css";

const Review = () => {
  const { slider, setSlider } = useContext(DataContext);
  return (
    <main className={`${slider == true ? "container" : "grid"}`}>
      <section className="review">
        <h1>Review Page</h1>
      </section>
    </main>
  );
};

export default Review;
