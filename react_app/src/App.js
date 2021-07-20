import "./App.css";
import { useState } from "react";
import Intro from "./components/Intro/Intro";
import ProfileSection from "./components/Profile/ProfileSection";
import Benchmark from "./components/Benchmark/Benchmark";
import LandingJobsList from "./components/LandingJobsContainer/LandingJobsList";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";




function App() {
    const [showLJ, setShowLJ] = useState(false);
    const [showJobs, setShowJobs] = useState(true);

    return (
        <div className={showLJ ? (showJobs ? "App-company" : "App-talent") : "App"}>

            <Intro />
            <ProfileSection setShowLJ={setShowLJ} setShowJobs={setShowJobs} />
            {/* <Benchmark showLJ={showLJ} showJobs={showJobs} /> */}
            <LandingJobsList showLJ={showLJ} showJobs={showJobs} />
            <Subscribe showLJ={showLJ}/>
            <Footer showLJ={showLJ} /> 
        </div>
    );
}

export default App;
