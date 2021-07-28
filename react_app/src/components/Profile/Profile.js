import "./Profile.css";
import { useTranslation } from "react-i18next";

const Profile = ({
    title,
    content,
    image,
    setShowLJ,
    id,
    setShowJobs,
}) => {
    const handleShowLJ = () => {
        setShowLJ(true);
        if (id === 1) {
            setShowJobs(true);
        } else {
            setShowJobs(false);
        }
    };

    const { t } = useTranslation();
    return (
        <div className="profile-card">
            <div className="profile-card-content">
                <div className="profile-text">
                    <h2
                        className={
                            id === 1
                                ? "profile-title-purple"
                                : "profile-title-blue"
                        }
                    >
                        {title}
                    </h2>
                    <p className="profile-content"> {content} </p>
                </div>
                <div className="profile-right-side">
                    <img className="profile-img" src={image} alt="worker" />
                </div>
            </div>
            <button
                className={
                    id === 1
                        ? "bttn-get-started-purple"
                        : "bttn-get-started-blue"
                }
                onClick={() => handleShowLJ()}
            >
                {id === 1 ? (
                    <>
                        <div className="btn-text">
                            {t("gain_salary_insights")}
                        </div>
                        <div className="btn-text-mobile">
                            {t("gain_salary_insights_mobile")}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="btn-text">
                            {t("get_my_salary_estimates")}
                        </div>
                        <div className="btn-text-mobile">
                            {t("get_my_salary_estimates_mobile")}
                        </div>
                    </>
                )}
            </button>
        </div>
    );
};

export default Profile;
