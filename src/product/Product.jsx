import { useState, useEffect } from "react";
import bgImage2 from "../assets/img/sekil2.jpg";
import FirstComponent from "../home/FirstComponent";
import Shop from "../product/Shop";
import CartSidebar from "./CartSidebar";

const Product = () => {
  const [data, setData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);

  useEffect(() => {
    fetch("/src/MOCK_DATA.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // Filter products based on selected categories and max price
  const filteredData = data.filter(
    (product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      product.price <= maxPrice
  );

  return (
    <div>
      <FirstComponent
        title="All Products"
        subtitle="// Products"
        bgImage={bgImage2}
      />
      <div className="CartSidebar">
        <CartSidebar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
        <div  className="CartSidebar__Right">
          {filteredData.map((product, index) => (
            <Shop
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;