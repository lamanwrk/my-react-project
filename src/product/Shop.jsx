import PropTypes from "prop-types";
const Shop = (props) => {
    return (
      <div className="product_wrp">
        <div className="products">
          <div className="products__item">
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <img src={props.image} alt={props.name} />
          </div>
        </div>
      </div>
    );
  };
  Shop.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string.isRequired
  };
  export default Shop;
  