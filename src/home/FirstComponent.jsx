import PropTypes from "prop-types";

const FirstComponent = (props) => {
 const componentStyle = {
  background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("${props.bgImage}")`,
  backgroundAttachment: "fixed",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "#fff",
  fontFamily: "Cormorant, serif",
  minHeight: "500px",
};

  return ( 
    <div className="firstComponent" style={componentStyle}>
      <div className="centerText">
        <h1>{props.title}</h1>
        <p>
          <span>Home</span> {props.subtitle}
        </p>
      </div>
    </div>
  );
};

FirstComponent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string.isRequired
};

export default FirstComponent;
