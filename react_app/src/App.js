import "./App.css";
import { useState, useEffect } from "react";
import Intro from "./components/Intro/Intro";
import ProfileSection from "./components/Profile/ProfileSection";
import Benchmark from "./components/Benchmark/Benchmark";
import LandingJobsList from "./components/LandingJobsContainer/LandingJobsList";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb"
  }, 
  {
    code: "pt",
    name: "português",
    country_code: "pt"
  }, 
  {
    code: "fr",
    name: "Français",
    country_code: "fr"
  }, 

]


function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  const [showLJ, setShowLJ] = useState(false);
  const [showJobs, setShowJobs] = useState(true);

  useEffect(() => {
    console.log('Setting page')
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <div>
        <div className={showLJ ? (showJobs ? "App-cie" : "App-talent") : "App"}>
          <Intro languages = {languages} />
    
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
  );
 
}

export default App;
