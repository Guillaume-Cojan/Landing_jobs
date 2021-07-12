import "./App.css";
import { useState } from "react";
import Intro from "./components/Intro/Intro";
import ProfileSection from "./components/Profile/ProfileSection";
import Benchmark from "./components/Benchmark/Benchmark";
import LandingJobsList from "./components/LandingJobsContainer/LandingJobsList";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
    const [showLJ, setShowLJ] = useState(false);
    const [showJobs, setShowJobs] = useState(true);

    return (
        <div className={showLJ ? (showJobs ? "App-company" : "App-talent") : "App"}>
            <div className="intro-component">
            <Intro />
            </div>
            <div className="profiles-component">
                <ProfileSection setShowLJ={setShowLJ} setShowJobs={setShowJobs} />
            </div>
            {/* 
            <Benchmark showLJ={showLJ} showJobs={showJobs} />
            <LandingJobsList showLJ={showLJ} showJobs={showJobs} />
            <Subscribe />
            <Footer showLJ={showLJ} /> */}
        </div>
    );
}

export default App;
