import JobCard from "./JobCard";
import TalentCard from "./TalentCard"
import "./LandingJobsList.css"

// Remove later
import {useState} from 'react';


const JobList = () => {
    const [showLJContainer, setShowLJContainer] = useState(true)
    const [ showJobs , setShowJobs ] = useState(false)
    
    return(
        <div className={ showLJContainer ? "landingjobs-list-container " : "hidden"} >
            <h1 className="landingjobs-list-title">
                {showJobs ? "Jobs for UX Designer" : "Find the perfect candidates for UX Designer"}
            </h1>
            <div className="landingjobs-items">
                {showJobs ? <JobCard /> : <TalentCard /> }
                {showJobs ? <JobCard /> : <TalentCard /> }
                {showJobs ? <JobCard /> : <TalentCard /> }
            </div>
            <p className="job-list-link">
                View more jobs on <a href="https://landing.jobs/"> Landing.Jobs </a>
            </p>
        </div>
    )
}

export default JobList;