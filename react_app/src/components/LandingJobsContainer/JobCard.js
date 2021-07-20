import { useTranslation } from "react-i18next";

function JobCard({ logo, title, companyName, city, url }) {
    const { t } = useTranslation();

    return (
        <div className="job-card">
           
            <div className="job-description">
            <img className="job-logo" src={logo} alt="company logo" />
              
                
                <div className="job-details">
                    <h2 className="job-title">{title}</h2>
                    <div className="job-details-smaller-section"> 
                    <h3 className="company-name">{companyName}</h3>
                    <h3 className="location">{city}</h3>
                    </div>
                </div>
            </div>
            <form
                className="bttn-job-details"
                action={url}
                method="get"
                target="_blank"
            >
                <button className="details-btn" type="submit" >
                    {t("view_more_details")}
                </button>
            </form>
        </div>
    );
}

export default JobCard;
