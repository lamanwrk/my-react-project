import OurTeamItem from "./OurTeamItem"

const OurTeam = () => {
  return (
    <div>
      <div className="textCenter">
        <p>OUR TEAM</p>
        <h1>Meet Our Confectioners</h1>
      </div>
    <div className="ourTeam">
    <OurTeamItem/>
      <OurTeamItem/>
      <OurTeamItem/>
      <OurTeamItem/>
    </div>
    <div className="button">
    <button className="generalButton">READ MORE</button>

    </div>
    </div>
  )
}

export default OurTeam
