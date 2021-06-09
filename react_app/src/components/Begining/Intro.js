import Onion from "../assets/Onion.svg";
import FeedbackSession1 from "..assets/Allura-FeedbackSession1.svg";
import "./Intro.css";
function Intro() {
    return (
    <div className="rectangle-328">
        <div className="top-logo">
            <h3 className="logo"><img className="onion" src={Onion} alt="logo"></img> &nbsp; LaslesVPN</h3>
        </div>
        <div className="right-side">
        <div className="content-intro">
            <h1>Tech Professionals Salary Benchmarking</h1>
            <p> Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us. </p>
        </div>
        </div>
        <div className="left-side">
           <div className="intro-image"><img className="session" src={FeedbackSession1} alt="session"></img>
           </div>
        </div>
    </div>
      )
  }
  
  export default Intro;
