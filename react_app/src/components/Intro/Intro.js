import LjLogo from "./../../assets/LJ_Logo.svg";
//import Allura from "./../../assets/Allurra-FeedbackSession1.svg";
import ImgHero from "./../../assets/Ativo 1 1.svg";
import "./Intro.css";

function Intro() {
    return (
        <div className="intro-container">
            <div className="top-logo">
                <img className="lj-logo" src={LjLogo} alt="logo"></img>
            </div>
            <div className="intro-content">
                <div className="intro-text">
                    <h3 className="intro-app">SALARY</h3>
                    <h2 className="intro-title">Tech Professionals</h2>
                    <h2 className="intro-title">Salary Benchmarking</h2>
                    <p className="intro-description">
                        {" "}
                        Provide a network for all your needs with ease and fun
                        using LaslesVPN discover interesting features from us.{" "}
                    </p>
                </div>
                <div className="intro-image">
                    <img className="ellipse" src={ImgHero} alt="ellipse" />
                </div>
            </div>
        </div>
    );
}

export default Intro;
