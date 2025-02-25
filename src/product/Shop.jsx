import PropTypes from "prop-types";

const Shop = (props) => {
  return (
    <div className="products__item">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </div>
  );
};

Shop.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string.isRequired,
};

export default Shop;