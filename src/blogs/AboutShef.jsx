import PropTypes from "prop-types";

const AboutShef = (props) => {
  return (
    <div className="aboutshef">
      <figure>
        <img src={props.avatar} alt={props.title} />
      </figure>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
};

AboutShef.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default AboutShef;
