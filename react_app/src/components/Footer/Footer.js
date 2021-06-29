import LjLogo from "./../../assets/LJ_Logo.svg";
import Linkedin from "./../../assets/social-linkedin-md.svg";
import Instagram from "./../../assets/social-instagram-md.svg";
import Github from "./../../assets/social-github-md.svg";
import "./Footer.css";

function Footer({ showLJ }) {
    return (
        <div className={showLJ ? "footer-wrapper-grey" : "footer-wrapper"}>
            <div className="footer-left">
                <img className="lj-logo-footer" src={LjLogo} alt="logo"></img>
                <p className="footer-text">
                    Landing... nononoono onoo onono onon ooonoonn noono n
                </p>
                <div className="social-icons-desktop">
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
                <h5 className="copyright-desktop">©2021LandingJobs</h5>
            </div>
            <div className="footer-center">
                <h4 className="footer-title">RESOURCES</h4>
                <p>
                    <a
                        href="https://landing.jobs/resources/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Reading Materials
                    </a>
                </p>
                <p>
                    <a
                        href="https://blog.landing.jobs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Blog
                    </a>
                </p>
                <p>
                    <a
                        href="https://drive.google.com/drive/folders/1zhIwaq5nvGeFqo6ML80HC5ZK2StC5J8n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Press Kit
                    </a>
                </p>
            </div>
            <div className="footer-right">
                <h4 className="footer-title">HELP</h4>
                <p>
                    <a
                        href="https://landing.jobs/faq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        About
                    </a>
                </p>
                <p>
                    <a
                        href="https://landing.jobs/contacts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Contacts
                    </a>
                </p>
                <p>
                    <a
                        href="https://landing.jobs/faq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        FAQ
                    </a>
                </p>
                <p>
                    <a
                        href="https://landing.jobs/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Privacy
                    </a>
                </p>
                <p>
                    <a
                        href="https://landing.jobs/tos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Terms
                    </a>
                </p>
            </div>
            <div className="end-footer-mobile">
                <div className="social-icons-mobile">
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
                <h5 className="copyright-mobile">©2021LandingJobs</h5>
            </div>
        </div>
    );
}

export default Footer;
