function JobCard({ logo, title, companyName, city, url }) {
    return (
        <div className="job-card">
            <h2 className="job-title">{title}</h2>
            <div className="job-description">
                <img className="job-logo" src={logo} alt="company logo" />
                <div className="company-location">
                    <h3 className="company-name">{companyName}</h3>
                    <h3 className="location">{city}</h3>
                </div>
            </div>
            <form
                className="bttn-job-details"
                action={url}
                method="get"
                target="_blank"
            >
                <button className="details-btn" type="submit">
                    View more details
                </button>
            </form>
        </div>
    );
}

export default JobCard;
