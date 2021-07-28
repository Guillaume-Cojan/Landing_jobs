import Profile from "./Profile";
import ProfileCompany from "../../assets/profile_company.svg";
import ProfileTalent from "../../assets/profile_talent.svg";
import "./Profile.css";
import { useTranslation } from "react-i18next";

function ProfileSection({ setShowJobs, setShowLJ }) {
    const { t } = useTranslation(); 
 
    return (
            <div className="profiles-container">
                <Profile
className="profile-company"                    
title={t("company_title")}
                    content={t(
                        "company"
                    )}
                    image={ProfileCompany}
                    setShowLJ={setShowLJ}
                    id={1}
                    setShowJobs={setShowJobs}
                />
                <Profile
className="profile-talent"                    
title={t("talent_title")}
                    content={t(
                        "talent")}
                    image={ProfileTalent}
                    setShowLJ={setShowLJ}
                    id={2}
                    setShowJobs={setShowJobs}
                />
            </div>
    );
}

export default ProfileSection;
