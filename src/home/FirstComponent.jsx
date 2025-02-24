import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const FirstComponent = (props) => {
 const componentStyle = {
  background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("${props.bgImage}")`,
  backgroundAttachment: "fixed",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "#fff",
  fontFamily: "Cormorant, serif",
  minHeight: "34.723vw",
};

  return ( 
    <div className="firstComponent" style={componentStyle}>
      <div className="centerText">
        <h1>

{props.title}

        </h1>
        <p>
           <NavLink to="/">Home</NavLink>{props.subtitle}
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
