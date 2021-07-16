import JobCard from "./JobCard";
import TalentCard from "./TalentCard";
import "./LandingJobsList.css";
import { useState, useEffect } from "react";
import { talentList } from "./TalentLists";

const LandingJobsList = ({ showLJ, showJobs }) => {
    const [jobsList, setJobsList] = useState([]);
    const [companiesList, setCompaniesList] = useState([]);

    const searchJob = () => {
        fetch("https://landing.jobs/api/v1/jobs?limit=3&offset=47")
            .then((res) => res.json())
            .then((data) => setJobsList(data));
    };
    useEffect(searchJob, []);

   

    const searchCompany = () => {
        let companyIds = jobsList.map(job => job.company_id)
        companyIds.map(id => {
            fetch("https://landing.jobs/api/v1/companies/" + id)
            .then((res) => res.json())
            .then((data) =>  setCompaniesList(prevState => [...prevState, data]))
            return 1})
    };
    useEffect(searchCompany, [jobsList]);

    

    return (
        <div className={showLJ ? "landingjobs-list-container " : "hidden"}>
            <h1 className="landingjobs-list-title">
                {showJobs ? "Find the right candidates" : "Latest Job Offers"}
            </h1>
            <div className="landingjobs-items">
                {showJobs
                    ? talentList.map((talent, index) => (  <TalentCard 
                        key={index}
                        avatar={talent.avatar}
                        name={talent.name}
                        title={talent.title}
                        experience={talent.experience} />)) 
                    : 
                    jobsList.map((job, index) => ( <JobCard
                        key={index}
                        title={job.title}
                        logo={ companiesList.length > 1 ? companiesList.find((x) => x.id === job.company_id).logo_url : "logo" }
                        companyName={ companiesList.length > 1 ?companiesList.find((x) => x.id === job.company_id).name : "Loading..."}
                        city={job.city}
                        url={job.url}/> 
                    ))
                }
            </div>
            <p className="job-list-link"> View more on{" "}
                <a
                    className={showJobs ? "a-talent" : "a-job"}
                    href="https://landing.jobs/"
                    target="_blank"
                    rel="noopener noreferrer">
                    {" "}
                    Landing.Jobs{" "}
                </a>
            </p>
        </div>
    );
};

export default LandingJobsList;
