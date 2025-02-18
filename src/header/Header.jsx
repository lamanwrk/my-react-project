import img from "../assets/img/ChocoLove-logos_whitee .png";
import img2 from "../assets/img/269dd16fa1f5ff51accd09e7e1602267.png";
import icon1 from "../assets/img/bag-shopping-solid.svg";
import icon2 from "../assets/img/heart-regular.svg";
import icon3 from "../assets/img/magnifying-glass-solid.svg";
import icon4 from "../assets/img/user-regular.svg";
import icon5 from "../assets/img/bars-solid.svg";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <figure className="logo">
        <img src={img} alt="Logo" />
      </figure>
      <div>
        <figure className="menu">
          <img src={img2} alt="Menu" />
        </figure>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li><NavLink to="/about">About us</NavLink></li>
          <li><NavLink to="/product">Products</NavLink></li>
          <li><NavLink to="/blog">Blogs</NavLink></li>
          <li><NavLink to="/contact">Contacts</NavLink></li>
        </ul>
      </nav>
      <div className="icons">
        <figure>
          <img src={icon1} alt="Icon 1" />
        </figure>
        <figure>
          <img src={icon2} alt="Icon 2" />
        </figure>
        <figure>
          <img src={icon3} alt="Icon 3" />
        </figure>
        <figure>
          <img src={icon4} alt="Icon 4" />
        </figure>
        <figure>
          <img src={icon5} alt="Icon 5" />
        </figure>
      </div>
    </div>
  );
}

export default Header;
