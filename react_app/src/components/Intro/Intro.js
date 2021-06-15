import Onion from "./../../assets/Onion.svg";
import Allura from "./../../assets/Allurra-FeedbackSession1.svg"
import Ellipse from "./../../assets/Ellipse.svg"
import "./Intro.css";


function Intro() {
    return (
      
    <div className="intro-container">
        <div className="top-logo">
            <img className="onion" src={Onion} alt="logo"></img>
            <h1 className="logo"> &nbsp; LaslesVPN</h1>
        </div>   
        <div className="intro-content">
            <div className="c1">
                <h2 className="intro-title">Tech Professionals <br></br>Salary Benchmarking</h2>
                <p className="intro-description"> Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us. </p>     
            </div>
            <div className="intro-image">
                <img className="ellipse" src={Ellipse} alt="ellipse"/>
                <img className="session" src={Allura} alt="session"/>
            </div>
        </div>
    </div>

    )
  }
  
  export default Intro;
