import JobCard from "./JobCard";
import "./JobList.css";

const JobList = () => {
    return (
        <div className="job-list-container">
            <h1 className="job-list-title">Jobs for UX Designer</h1>
            <div className="job-items">
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
            <p className="job-list-link">
                View more jobs on{" "}
                <a
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

export default JobList;
