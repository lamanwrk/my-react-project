import img1 from "../assets/img/gallery-01-e1597251883779-360x360.jpg";
import img2 from "../assets/img/gallery-02-480x480 (1).jpg";
import img3 from "../assets/img/gallery-03-480x480 (1).jpg";
import img4 from "../assets/img/gallery-04-480x480.jpg";
function Gallery() {
  return (
    <div className="gallery">
      <div className="textcenter">
        <p>GALLERY</p>
        <h1>
          “Our pastry chefs create sweets only
          <br />
          with creativity and love”
        </h1>
      </div>
      <div className="gallery__box">
        <div>
          <figure>
            <img src={img1} alt="" />
          </figure>
          <div className="square"></div>
        </div>
        <div>
          <figure>
            <img src={img2} alt="" />
          </figure>
          <div className="square"></div>
        </div>
        <div>
          <figure>
            <img src={img3} alt="" />
          </figure>
          <div className="square"></div>
        </div>
        <div>
          <figure>
            <img src={img4} alt="" />
          </figure>
          <div className="square"></div>
        </div>
      </div>
      <button className="generalButton">READ MORE</button>
    </div>
  );
}

export default Gallery;
