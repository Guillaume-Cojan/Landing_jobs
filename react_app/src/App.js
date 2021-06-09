import "./App.css";
import {useState} from "react";
import Intro from "./components/Intro/Intro";
import ProfileSection from "./components/Profile/ProfileSection";
import Benchmark from "./components/Benchmark/Benchmark";
import LandingJobsList from "./components/LandingJobsContainer/LandingJobsList";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
    const [ showLJ , setShowLJ ] = useState(false)
    const [showJobs, setShowJobs] = useState(true)

    return (
        <div className="App">
            <Intro />
            <ProfileSection 
                setShowLJ={setShowLJ}
                setShowJobs={setShowJobs}/>
            <Benchmark />
            <LandingJobsList  
                showLJ={showLJ}
                showJobs={showJobs}
                />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;
