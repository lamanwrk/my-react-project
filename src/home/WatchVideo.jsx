import img from '../assets/img/Arrow_drop_right.svg'
function WatchVideo() {
function showVideo (){
    window.open("https://youtu.be/GwABS_MBRRQ?si=z1C9-8W-1aS46F7I", "_blank");
}
  return (
    <div className="WatchVideo">
      <figure>
      </figure>
      <div className="textCenter">
        <h1>Watch our video</h1>
        <button onClick={showVideo} className="buttonicon">
        <img src={img} alt="" />
        </button>
      </div>
    </div>
  );
}

export default WatchVideo;
