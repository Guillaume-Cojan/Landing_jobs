import JobCard from "./JobCard";
import TalentCard from "./TalentCard";
import "./LandingJobsList.css";

const LandingJobsList = ({ showLJ, showJobs }) => {
    return (
        <div className={showLJ ? "landingjobs-list-container " : "hidden"}>
            <h1 className="landingjobs-list-title">
                {showJobs
                    ? "Find the perfect candidates for UX Designer"
                    : "Jobs for UX Designer"}
            </h1>
            <div className="landingjobs-items">
                {showJobs ? <TalentCard /> : <JobCard />}
                {showJobs ? <TalentCard /> : <JobCard />}
                {showJobs ? <TalentCard /> : <JobCard />}
            </div>
            <p className="job-list-link">
                View more jobs on{" "}
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
