import { BsFiletypePdf } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProductFeaturesText = () => {
  return (
    <div className='productFeatures'>
    <h3>
      Our patisserie produces
      <br />
      <span>unique sweets </span>
      for lovers of yummy
    </h3>
    <p>
      Curabitur tortor ante, vestibulum vel lacus id, semper malesuada sem.
      Sed sit amet tortor augue. Integer magna neque
    </p>
    <h5><BsFiletypePdf />
        Download Price</h5>
    <NavLink to="/about">READ MORE <FaArrowRight /></NavLink>
    
  </div>
  )
}

export default ProductFeaturesText
