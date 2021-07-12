import Profile from "./Profile";
import ProfileCompany from "../../assets/profile_company.svg";
import ProfileTalent from "../../assets/profile_talent.svg";
import "./Profile.css";
import { useTranslation } from "react-i18next";

function ProfileSection({ showJobs, setShowJobs, showLJ, setShowLJ }) {
    const { t } = useTranslation()
    return (
        <div className="profiles">
            <div className="profiles-container">
                <Profile
                    title={"Company"}
                    content={t(
                        "Pay what your talent deserves. Make confident decisions with transparent salary data."
                    )}
                    image={ProfileCompany}
                    setShowLJ={setShowLJ}
                    id={1}
                    setShowJobs={setShowJobs}
                />
                <div>{""}</div>
                <Profile
                    title={"Talent"}
                    content={t(
                        "Stop guessing what you are worth. Gain the insights needed to make the smartest career move decision.")}
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
