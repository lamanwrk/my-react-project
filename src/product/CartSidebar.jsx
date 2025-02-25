import PropTypes from "prop-types"; // Import PropTypes for validation

const CartSidebar = ({
  selectedCategories,
  setSelectedCategories,
  maxPrice,
  setMaxPrice,
}) => {
  const categories = [
    "Chocolate",
    "Belgian Waffles",
    "Dark Chocolate",
    "Desserts",
    "Truffles",
  ];

  // Toggle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="CartSidebar__left">
      <div>
        <h1>Cart</h1>
        <p>No products in the cart.</p>
      </div>
      <div style={{ margin: "3.34vw 0" }}>
        <h1>Product categories</h1>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={selectedCategories.includes(category) ? "selected" : ""}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Price</h1>
        <input
          type="range"
          min="0"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <p>{maxPrice}$</p>
      </div>
      <button
        onClick={() => {
          setSelectedCategories([]);
          setMaxPrice(500);
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

// Define PropTypes for the component's props
CartSidebar.propTypes = {
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
  maxPrice: PropTypes.number.isRequired,
  setMaxPrice: PropTypes.func.isRequired,
};

export default CartSidebar;