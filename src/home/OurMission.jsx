import img1 from "../assets/img/sign-bg.jpg";
import img2 from "../assets/img/cocoa-02.png";
import img3 from "../assets/img/sign-person.png";
const OurMission = () => {
  return (
    <div style={{position:"relative"}}>
      <div className="leftRight">
        <figure >
          <img src={img1} alt="" />
        </figure>
        <figure >
          <img src={img2} alt="" />
        </figure>
      </div>
      <div className="textPA">
        <p>OUR MISSION</p>
        <h1>
          “Making chocolates is an art that we have perfected over the years to
          make our customers happy”
        </h1>
        <h5>Orlando Detmers</h5>
        <h6>PASTRY CHEF</h6>
      </div>
      <figure style={{left:"32%", height:"51.6vw"}}>
        <img src={img3} alt="" />
      </figure>
    </div>
  );
};

export default OurMission;
