import "./App.css";
import { useState } from "react";
import Intro from "./components/Intro/Intro";
import ProfileSection from "./components/Profile/ProfileSection";
import Benchmark from "./components/Benchmark/Benchmark";
import LandingJobsList from "./components/LandingJobsContainer/LandingJobsList";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "pt",
    name: "português",
    country_code: "pt",
  },
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
];

function App() {
  const { t } = useTranslation();

  const [showLJ, setShowLJ] = useState(false);
  const [showJobs, setShowJobs] = useState(true);


  return (
    <div>
      <div className={showLJ ? (showJobs ? "App-cie" : "App-talent") : "App"}>
        <Intro languages={languages} />

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
