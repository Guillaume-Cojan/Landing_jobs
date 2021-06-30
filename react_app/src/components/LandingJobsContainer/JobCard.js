function JobCard() {
    return (
        <div className="job-card">
            <div className="job-logo">logo</div>
            <h2 className="job-title">UX/UI Designer</h2>
            <div className="company-location">
                <h3 className="company-name">Company name</h3>
                <h3 className="location">Berlin,Germany</h3>
            </div>

            <button className="bttn-job-details"> View more details </button>
        </div>
    );
}

export default JobCard;
