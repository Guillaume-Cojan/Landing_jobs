import i18next from "i18next";
import { Trans } from "react-i18next";
import "./Profile.css";
import { useTranslation } from "react-i18next";

const Profile = ({
  title,
  content,
  image,
  showLJ,
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

  const { t, i18n } = useTranslation();

  return (
    <Trans i18nKey="getStartedButton">
      <div className="profile-card">
        <div className="profile-text">
          <h2 className={id === 1 ? "profile-title-cie" : "profile-title"}>
            {title}
          </h2>
          <p className="profile-content"> {content} </p>
          <button
            className={id === 1 ? "bttn-get-started-cie" : "bttn-get-started"}
            onClick={() => handleShowLJ()}
          >
            {id === 1
              ? t("gain_salary_insights")
              : t("get_my_salary_estimates")}
          </button>
        </div>
        <div className="profile-right-side">
          <img className="profile-img" src={image} alt="worker" />
        </div>
      </div>
    </Trans>
  );
};

export default Profile;
