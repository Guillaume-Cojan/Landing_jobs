import Profile from "./Profile";
import ProfileCompany from "../../assets/profile_company.png";
import ProfileTalent from "../../assets/profile_talent.png";
import "./Profile.css";

function ProfileSection({ showJobs, setShowJobs, showLJ, setShowLJ }) {
    return (
        <div className="profiles">
            <div className="profiles-container">
                <Profile
                    title={"Company"}
                    content={
                        "Pay what your talent deserves. Make confident decisions with transparent salary data."
                    }
                    image={ProfileCompany}
                    setShowLJ={setShowLJ}
                    id={1}
                    setShowJobs={setShowJobs}
                />
                <div>{""}</div>
                <Profile
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
        </div>
    );
}

export default ProfileSection;
