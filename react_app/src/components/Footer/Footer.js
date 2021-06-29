import LjLogo from "./../../assets/LJ_Logo.svg";
import Linkedin from "./../../assets/social-linkedin-md.svg";
import Instagram from "./../../assets/social-instagram-md.svg";
import Github from "./../../assets/social-github-md.svg";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-left">
                <img className="lj-logo-footer" src={LjLogo} alt="logo"></img>
                <p className="footer-text">
                    Landing... nononoono onoo onono onon ooonoonn noono n
                </p>
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/company/landing-jobs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social_icon"
                            src={Linkedin}
                            alt="linkedin"
                        ></img>
                    </a>
                    <a
                        href="https://www.instagram.com/landing.jobs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social_icon"
                            src={Instagram}
                            alt="instagram"
                        ></img>
                    </a>
                    <a
                        href="https://github.com/LandingJobs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social_icon"
                            src={Github}
                            alt="github"
                        ></img>
                    </a>
                </div>
                <h5 className="copyright">©2021LandingJobs</h5>
            </div>
            <div className="footer-center">
                <h4 className="footer-title">RESOURCES</h4>
                <p>Reading Materials</p>
                <p>Blog</p>
                <p>Press Kit</p>
            </div>
            <div className="footer-right">
                <h4 className="footer-title">HELP</h4>
                <p>About</p>
                <p>Contacts</p>
                <p>FAQ</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
            <div className="end-footer-mobile">
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/company/landing-jobs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social_icon"
                            src={Linkedin}
                            alt="linkedin"
                        ></img>
                    </a>
                    <a
                        href="https://www.instagram.com/landing.jobs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social_icon"
                            src={Instagram}
                            alt="instagram"
                        ></img>
                    </a>
                    <a
                        href="https://github.com/LandingJobs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social_icon"
                            src={Github}
                            alt="github"
                        ></img>
                    </a>
                </div>
                <h5 className="copyright">©2021LandingJobs</h5>
            </div>
        </div>
    );
}

export default Footer;
