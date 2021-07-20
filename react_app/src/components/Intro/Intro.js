import LjLogo from "./../../assets/LJ_Logo.svg";
import IntroImg from "./../../assets/intro.svg";
import "./Intro.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

function Intro() {
const { t } = useTranslation();
    return (
        <div className="intro-container">
            <div className="top-logo">
                <img className="lj-logo" src={LjLogo} alt="Landing.Jobs-logo"></img>
                <LanguageSwitcher />
            </div>
            <div className="intro-content">
                    <div className="intro-text">
    
                        <div className = "title_app_container">
                        <h3 className="intro-app">{t("intro_app")}</h3>
                        <div className="title_container">
                        <h2 className="intro-title intro_title_1">{t("intro_title")}</h2>
                        <div className="pt-title-align">
                        <h2 className="intro-title intro_title_2">{t("intro_title_2")}</h2>
                        <h2 className="intro-title intro_title_3">{t("intro_title_3")}</h2>
                        </div>
                        </div>
                        <p className="intro-description">
                        {t("intro_description")}
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
            <div className="intro-bottom-section"> </div>
        </div>
  
    
  );
}

export default Intro;
