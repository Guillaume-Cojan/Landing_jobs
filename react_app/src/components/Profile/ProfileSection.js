import Profile from "./Profile";
import AlluraSitting from "../../assets/woman-sitting.png";
import AlluraStanding from "../../assets/sharing-presentation.png";
import "./Profile.css";

function ProfileSection({ showJobs, setShowJobs, showLJ, setShowLJ }) {
    return (
        <div className="profiles">
            <div className="profiles-container">
                <Profile
                    title={"Companies"}
                    content={
                        "Teaser about companies datas, or some... ... like that. Teaser about companies datas, or some... like that...."
                    }
                    image={AlluraSitting}
                    setShowLJ={setShowLJ}
                    id={1}
                    setShowJobs={setShowJobs}
                />
                <div>{""}</div>
                <Profile
                    title={"Talent"}
                    content={
                        "Teaser about talent data, or some... ... like that. Teaser about talent data, or some... ...like that."
                    }
                    image={AlluraStanding}
                    setShowLJ={setShowLJ}
                    id={2}
                    setShowJobs={setShowJobs}
                />
            </div>
        </div>
    );
}

export default ProfileSection;
