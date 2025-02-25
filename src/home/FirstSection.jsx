// Yuxarıda bütün importları yazın
import { useState } from "react";
import chevrenLeft from "../assets/img/chevron-left-solid.svg";
import chevrenRight from "../assets/img/chevron-right-solid.svg";
import img1 from "../assets/img/slider-overlay-01.jpg";
import img2 from "../assets/img/slider-overlay-02.jpg";
import img3 from "../assets/img/slider-overlay-03.jpg";
import img4 from "../assets/img/slider-overlay-04.jpg";
import { NavLink } from "react-router-dom";
const FirstSection = () => {
  const sliderData = [
    {
      img: img1,
      h1: "Author's Delicious Sweets",
      h2: "and Chocolate",
      description:
        "Traditional hand-dipping techniques that create truly unique confections. We offer handmade chocolates, truffles, caramels and more.",
      button: "Read more",
    },
    {
      img: img2,
      h1: "Fresh & Tasty Treats",
      h2: "with Love",
      description:
        "Our handmade sweets are made using traditional methods, ensuring an unforgettable taste and experience.",
      button: "Read more",
    },
    {
      img: img3,
      h1: "Premium Chocolate Collection",
      h2: "for Special Moments",
      description:
        "Enjoy our unique selection of handmade truffles, perfect for gifting or personal indulgence.",
      button: "Read more",
    },
    {
      img: img4,
      h1: "Sweets for Every Occasion",
      h2: "Handmade with Passion",
      description:
        "Celebrate life's sweet moments with our delightful and freshly made confectioneries.",
      button: "Read more",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  function leftIcon() {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1; // Sol istiqamət
    });
  }
  function rightIcon() {
    setCurrentIndex((prevIndex) => {
      return prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1;
    });
  }
  return (
    <div className="changeimg">
      <figure className="left" onClick={leftIcon}>
        <img src={chevrenLeft} alt="Left" />
      </figure>
      <figure className="img">
        <img src={sliderData[currentIndex].img} alt="Slider" />
      </figure>
      <figure className="right" onClick={rightIcon}>
        <img src={chevrenRight} alt="Right" />
      </figure>
      <div className="text">
        <h1>{sliderData[currentIndex].h1} </h1>
        <br />
        <h2>{sliderData[currentIndex].h2} </h2>
        <p> {sliderData[currentIndex].description} </p>
        <NavLink to="/about">
          {" "}
          <button className="generalButton">
            {sliderData[currentIndex].button}
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default FirstSection;
