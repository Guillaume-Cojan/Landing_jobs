import React from "react";
import { useState } from "react";
import Intro from "./components/Intro/Intro";
import ProfileSection from "./components/Profile/ProfileSection";
import Benchmark from "./components/Benchmark/Benchmark";
import LandingJobsList from "./components/LandingJobsContainer/LandingJobsList";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import i18nextConf from "./i18nextConf.js";
import LanguageSelect from "./components/LanguageSelect";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import Suspend from "./components/Suspend";

export default function Main() {
  const [showLJ, setShowLJ] = useState(false);
  const [showJobs, setShowJobs] = useState(true);
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="language-select">
        <div className="d-flex justify-content-end align-items-center language-select-root">
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <GlobeIcon />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t('language')}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <a
                    href="#"
                    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={showLJ ? (showJobs ? "App-cie" : "App-talent") : "App"}>
          <Intro translate={t} />
          <ProfileSection
            setShowLJ={setShowLJ}
            setShowJobs={setShowJobs}
            translate={t}
          />
          <Benchmark showLJ={showLJ} showJobs={showJobs} translate={t} />
          <LandingJobsList showLJ={showLJ} showJobs={showJobs} />
          <Subscribe translate={t} />
          <Footer showLJ={showLJ} />
        </div>
      </div>
      </div>
  );
}
