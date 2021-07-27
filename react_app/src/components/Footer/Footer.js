import LjLogo from "./../../assets/LJ_Logo.svg";
import "./Footer.css";
import { socialsList, LandingJobsLinks } from "./LinksList"



function Footer({showLJ}) {
    return (
        <div className={ showLJ ? "footer-wrapper-lj" : "footer-wrapper"}>
            <div className="footer-left">
            <a
                href="https://landing.jobs/home"
                target="_blank"
                rel="noopener noreferrer">
                    <img className="lj-logo-footer" src={LjLogo} alt="logo"></img>
                </a>

                <div className="social-icons-desktop">
                    {
                        socialsList.map((item, index) => { return (<a key={index} href={item.href} target="_blank" rel="noopener noreferrer" >
                                <img
                                    key={index}
                                    className="social_icon"
                                    src={item.src}
                                    alt={item.alt} /> 
                            </a>)})
                    }
                </div>
                <h5 className="copyright-desktop">
                    ©2021 LandingJobs, a Future.Works company
                </h5>
            </div>
                    <div className="landing-jobs-details">

                    
            <div className="footer-center">
                <h4 className="footer-title">RESOURCES</h4>
                {
                    LandingJobsLinks[0].map((link, index) => {return ( <p key={index}>
                         <a
                         key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        {link.name}
                    </a>
                    </p>)})
                }
            </div>

            <div className="footer-right">
                <h4 className="footer-title">HELP</h4>
                {
                    LandingJobsLinks[1].map((link, index) => {return ( <p key={index}>
                         <a
                         key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        {link.name}
                    </a>
                    </p>)})
                }
            </div>
            </div>
            <div className="end-footer-mobile">
                <div className="social-icons-mobile">
                {
                        socialsList.map((item, index) => { return (<a key={index} href={item.href} target="_blank" rel="noopener noreferrer" >
                                <img
                                    key={index}
                                    className="social_icon"
                                    src={item.src}
                                    alt={item.alt} /> 
                            </a>)})
                    }
                </div>

                <h5 className="copyright-mobile">
                    ©2021 LandingJobs, a Future.Works company
                </h5>
            </div>
        </div>
    );
}

export default Footer;
