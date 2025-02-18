import { useState, useEffect } from "react";
import bgImage2 from "../assets/img/sekil2.jpg";
import FirstComponent from "../home/FirstComponent";
import Shop from "../product/Shop";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/MOCK_DATA.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Store the fetched data in state
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <FirstComponent title="All Products" subtitle="// Products" bgImage={bgImage2} />
      {data.map((product, index) => (
        <Shop
          key={index} // Use the index as a unique key for each item
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default Product;
