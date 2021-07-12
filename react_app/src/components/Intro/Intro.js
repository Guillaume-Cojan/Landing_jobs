import LjLogo from "./../../assets/LJ_Logo.svg";
import IntroImg from "./../../assets/intro.svg";
import "./Intro.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import LanguageSwitcher from "../LanguageSwitcher";

function Intro({ }) {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const { t, i18n } = useTranslation(); 
  // i18next.options.supportedLngs

  return (
    <div className="intro-container">
      <LanguageSwitcher />
        <div className="intro-content">
          <div className="intro-text">
            <h3 className="intro_app">{t("intro_app")}</h3>
            <h2 className="intro_title">{t("intro_title")}</h2>
            <h2 className="intro_title_2">{t("intro_title_2")}</h2>
            <p className="intro_description">
              {t(
                "intro_description"
              )}
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
