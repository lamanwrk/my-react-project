import img1 from "../assets/img/shop-03-600x600.png";
import img2 from "../assets/img/shop-04-600x600.png";
import img3 from "../assets/img/shop-05-600x600.png";
import img4 from "../assets/img/shop-06-600x600.png";

function OnlineStore() {
  const candies = [
    {
      img: img1,
      name: "Chocolate Covered Roast",
      price: "17.99$",
    },
    {
      img: img2,
      name: "Honey Roasted Nuts",
      price: "19.99$",
    },
    {
      img: img3,
      name: "Truffle With Vanilla",
      price: "25.00$",
    },
    {
      img: img4,
      name: "Pastry Chef Fantasy",
      price: "13.49$",
    },
  ];

  return (
    <div className="OnlineStore">
      <div className="textDiscover">
        <p>ONLINE STORE</p>
        <h1>Discover Sweet Delicious</h1>
      </div>
      <div className="cardForCandy">
        <div className="noSlider">
          {candies.map((candy, index) => (
            <div className="candyBox" key={index}>
              <div className="boxWrp">
                <figure>
                  <img src={candy.img} alt={candy.name} />
                </figure>
                <div className="square"></div>
                <button>GO TO SHOP</button>
              </div>
              <h4>{candy.name}</h4>
              <p>{candy.price}</p>
            </div>
          ))}
        </div>
        <div className="slider"></div>
      </div>
      <div className="button">
        <button className="generalButton">ONLINE STORE</button>
      </div>
    </div>
  );
}

export default OnlineStore;
