import LjLogo from "./../../assets/LJ_Logo.svg";
import IntroImg from "./../../assets/intro.svg";
import "./Intro.css";

function Intro() {
    return (
        <div className="intro-container">
            <div className="top-logo">
                <img
                    className="lj-logo"
                    src={LjLogo}
                    alt="Landing.Jobs-logo"
                ></img>
            </div>
            <div className="intro-content">
                <div className="intro-text">
                    <h3 className="intro-app">SALARY</h3>
                    <h2 className="intro-title">Tech Professionals</h2>
                    <h2 className="intro-title">Salary Benchmarking</h2>
                    <p className="intro-description">
                        Trusted data that you need to land a new job or make the
                        right compensation decision with confidence. data that
                        you need to land a new job or make the right
                        compensation decision with confidence.
                    </p>
                </div>
                <div className="intro-image">
                    <img
                        className="ellipse"
                        src={IntroImg}
                        alt="intro-talents-companies"
                    />
                </div>
            </div>
        </div>
    );
}

export default Intro;
