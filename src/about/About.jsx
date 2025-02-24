import bgImage1 from "../assets/img/1foto.jpg"
import FirstComponent from "../home/FirstComponent"
import Statistics from "../home/Statistics"
import WatchVideo from "../home/WatchVideo"
import WhatMakesUsSpecial from "../home/WhatMakesUsSpecial"
import ProductFeaturesText from "../home/ProductFeaturesText"
import InfoProduct from "../product/InfoProduct"
import img1 from "../assets/img/gallery-01-e1597251883779-360x360.jpg"
import img2 from "../assets/img/gallery-02-480x480 (1).jpg"
import OurTeam from "./OurTeam"
function About() {

  return (
    <div className="about">
      <FirstComponent title="About Us"  subtitle="// About" bgImage={bgImage1}/>
      <div>
        <div className="box-wrp">
          <div className="left"><ProductFeaturesText/></div>
          <div className="right">
            <figure>
              <img src={img1} alt="" />
            </figure>
            <figure>
              <img src={img2} alt="" />
            </figure>
          </div>
        </div>
        <div className="info">
          <InfoProduct/>
        </div>
      </div>
      <WhatMakesUsSpecial/>
      <Statistics/>
      <WatchVideo/>
      <OurTeam/>
    </div>
  )
}

export default About