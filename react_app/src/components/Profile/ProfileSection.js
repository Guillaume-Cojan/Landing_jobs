import Profile from "./Profile";
import ProfileCompany from "../../assets/profile_company.svg";
import ProfileTalent from "../../assets/profile_talent.svg";
import "./Profile.css";
import { useTranslation } from "react-i18next";

function ProfileSection({ showJobs, setShowJobs, showLJ, setShowLJ }) {
    const { t } = useTranslation(); 
 
    return (
        <div className="profiles">
            <div className="profiles-container">
                <Profile
                    title={t("company_title")}
                    content={t(
                        "company"
                    )}
                    image={ProfileCompany}
                    setShowLJ={setShowLJ}
                    id={1}
                    setShowJobs={setShowJobs}
                />
                <div>{""}</div>
                <Profile
                    title={t("talent_title")}
                    content={t(
                        "talent")}
                    image={ProfileTalent}
                    setShowLJ={setShowLJ}
                    id={2}
                    setShowJobs={setShowJobs}
                />
            </div>
        </div>
    );
}

export default ProfileSection;
