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
                <div className="left-side">
                    <h1 className="intro-title">Tech Professionals</h1>
                     <h1 className="intro-title">Salary Benchmarking</h1>
                    <p className="intro-description"> Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us. </p>
                </div>
                <div className="right-side">
                    <div className="intro-image">
                        <img className="ellipse" src={Ellipse} alt="ellipse"/>
                        <img className="session" src={Allura} alt="session">
                        </img>

                    </div>
                </div>
            </div>


        </div>
      )
  }
  
  export default Intro;

