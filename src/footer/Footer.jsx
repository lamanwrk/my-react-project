import logo from "../assets/img/ChocoLove-logos_whitee .png";
import img1 from "../assets/img/Group 33.svg";
import img2 from "../assets/img/Group 34.svg";
import img3 from "../assets/img/Group 35.svg";
import img4 from "../assets/img/Group 36.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <figure>
            <img src={logo} alt="" />
          </figure>
          <p>See Our Chocolateries Making Some of Your Favorite Confections.</p>
          <div className="icon">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="middle">
          <h1>Explore</h1>
          <ul>
            <li>
              <h6>PHONE:</h6>
              <p>+49078-039-23-11</p>
            </li>
            <li>
              <h6>OUR LOCATION:</h6>
              <p>975 Liberty Ave, Union, NJ 07083, USA</p>
            </li>
            <li>
              <h6>EMAIL:</h6>
              <p>crems@like-themes.com</p>
            </li>
          </ul>
        </div>
        <div>
          <h1>Latest Posts</h1>
          <ul>
            <li>
              <h6>CRAFT FOOD</h6>
              <p>Rent of Equipment for Pastry Shops</p>
            </li>
            <li>
              <h6>CRAFT FOOD</h6>
              <p>Rent of Equipment for Pastry Shops</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="below">
        <p>Like-themes  © All Rights Reserved - 2023 - <span>Purchase</span></p>
      </div>
    </div>
  );
}

export default Footer;
