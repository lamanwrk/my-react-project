import { useState } from "react";

const AboutShef = () => {
  const [product,setProduct]=useState([])
  const shefList = () => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  shefList();
  return (
    <div>
      <div className="aboutshef">
        <figure>
          <img src="" alt="" />
        </figure>
        <h4></h4>
        <p></p>
      </div>
    </div>
  );
};

export default AboutShef;
