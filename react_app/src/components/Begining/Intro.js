import Onion from "./../assets/Onion.svg";
import Allura from "./../assets/Allurra-FeedbackSession1.svg"
import "./Intro.css";


function Intro() {
    return (
        <div className="intro-container">
            <div className="top-logo">
                <h1 className="logo">&nbsp; LaslesVPN</h1>
                <img className="onion" src={Onion} alt="logo"></img>
            </div>
            <div className="right-side">
            <div className="content-intro">
                <h1>Tech Professionals Salary Benchmarking</h1>
                <p> Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us. </p>
            </div>
            </div>
            <div className="left-side">
            <div className="intro-image"><img className="session" src={Allura} alt="session"></img>
            </div>
            </div>
        </div>
      )
  }
  
  export default Intro;
