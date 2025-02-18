import PropTypes from "prop-types";

const Contact_wrp = (props) => {
  return (
    <div className="card">
      <props.icon className="icon" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>{props.span}</p>
    </div>
  );
};

// PropTypes ilə `props`-ları yoxlama
Contact_wrp.propTypes = {
  icon: PropTypes.elementType, // React komponent (icon) olmalıdır
  title: PropTypes.string, // Başlıq string olmalıdır
  text: PropTypes.string,
  span:PropTypes.string // Mətn string olmalıdır
};

export default Contact_wrp;
