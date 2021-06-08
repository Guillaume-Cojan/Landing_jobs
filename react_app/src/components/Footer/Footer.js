import Onion from "../assets/Onion.svg";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="column-1">
        <div className="logo-text-img-container">
          <img className="onion" src={Onion} alt="logo"></img>
          <h3 className="logo-text">&nbsp; LaslesVPN</h3>
        </div>
        <p className="text">
          <strong>LaslesVPN</strong> is a private virtual network that <br></br>
          has unique features and has high security.
        </p>
        <span className="dot dot-1"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <h5 className="copyright">&copy; 2020LaslesVPN</h5>
      </div>
      <div className="column-2">
        <h4 className="earn-money">Earn Money</h4>
        <p>Affiliate</p>
        <p>Become a Partner</p>
      </div>
    </div>
  );
}

export default Footer;
