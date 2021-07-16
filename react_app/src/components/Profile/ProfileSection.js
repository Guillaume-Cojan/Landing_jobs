import Profile from "./Profile";
import ProfileCompany from "../../assets/profile_company.svg";
import ProfileTalent from "../../assets/profile_talent.svg";
import "./Profile.css";

function ProfileSection({ showJobs, setShowJobs, showLJ, setShowLJ }) {
    return (
            <div className="profiles-container">
                <Profile
                    className="profile-company"
                    title={"Company"}
                    content={
                        "Pay what your talent deserves. Make confident decisions with transparent salary data."
                    }
                    image={ProfileCompany}
                    setShowLJ={setShowLJ}
                    id={1}
                    setShowJobs={setShowJobs}
                />
                <Profile
                    className="profile-talent"
                    title={"Talent"}
                    content={
                        "Stop guessing what you are worth. Gain the insights needed to make the smartest career move decision."
                    }
                    image={ProfileTalent}
                    setShowLJ={setShowLJ}
                    id={2}
                    setShowJobs={setShowJobs}
                />
            </div>
    );
}

export default ProfileSection;
