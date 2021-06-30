import JobCard from "./JobCard";
import TalentCard from "./TalentCard";
import "./LandingJobsList.css";
import { useState, useEffect } from "react";

const LandingJobsList = ({ showLJ, showJobs }) => {
    const [jobsList, setJobsList] = useState([]);
    const [companiesList, setCompaniesList] = useState([]);

    const searchJob = () => {
        fetch("https://landing.jobs/api/v1/jobs")
            .then((res) => res.json())
            .then((data) => setJobsList(data));
    };
    useEffect(searchJob, []);

    const searchCompany = () => {
        fetch("https://landing.jobs/api/v1/companies")
            .then((res) => res.json())
            .then((data) => setCompaniesList(data));
    };
    useEffect(searchCompany, []);

    return (
        <div className={showLJ ? "landingjobs-list-container " : "hidden"}>
            <h1 className="landingjobs-list-title">
                {showJobs ? "Find the perfect candidates" : "Latest Job Offers"}
            </h1>
            <div className="landingjobs-items">
                {showJobs ? (
                    <TalentCard />
                ) : (
                    <JobCard
                        logo={
                            companiesList.find(
                                (x) =>
                                    x.id ===
                                    jobsList[jobsList.length - 1].company_id
                            ).logo_url
                        }
                        title={jobsList[jobsList.length - 1].title}
                        companyName={
                            companiesList.find(
                                (x) =>
                                    x.id ===
                                    jobsList[jobsList.length - 1].company_id
                            ).name
                        }
                        city={jobsList[jobsList.length - 1].city}
                        url={jobsList[jobsList.length - 1].url}
                    />
                )}
                {showJobs ? (
                    <TalentCard />
                ) : (
                    <JobCard
                        logo={
                            companiesList.find(
                                (x) =>
                                    x.id ===
                                    jobsList[jobsList.length - 2].company_id
                            ).logo_url
                        }
                        title={jobsList[jobsList.length - 2].title}
                        companyName={
                            companiesList.find(
                                (x) =>
                                    x.id ===
                                    jobsList[jobsList.length - 2].company_id
                            ).name
                        }
                        city={jobsList[jobsList.length - 2].city}
                        url={jobsList[jobsList.length - 2].url}
                    />
                )}
                {showJobs ? (
                    <TalentCard />
                ) : (
                    <JobCard
                        logo={
                            companiesList.find(
                                (x) =>
                                    x.id ===
                                    jobsList[jobsList.length - 3].company_id
                            ).logo_url
                        }
                        title={jobsList[jobsList.length - 3].title}
                        companyName={
                            companiesList.find(
                                (x) =>
                                    x.id ===
                                    jobsList[jobsList.length - 3].company_id
                            ).name
                        }
                        city={jobsList[jobsList.length - 3].city}
                        url={jobsList[jobsList.length - 3].url}
                    />
                )}
            </div>
            <p className="job-list-link">
                View more on{" "}
                <a
                    className={showJobs ? "a-talent" : "a-job"}
                    href="https://landing.jobs/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    Landing.Jobs{" "}
                </a>
            </p>
        </div>
    );
};

export default LandingJobsList;
