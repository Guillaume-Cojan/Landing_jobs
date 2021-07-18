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
    
                        <h3 className="intro-app">{t("intro_app")}</h3>
                        <h2 className="intro-title">{t("intro_title")}</h2>
                        <h2 className="intro-title">{t("intro_title_2")}</h2>
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
            <div className="intro-bottom-section"> </div>
        </div>
  
    
  );
}

export default Intro;
