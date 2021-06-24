import Profile from "./Profile";
import AlluraSitting from "../../assets/Allura-Sitting.svg";
import AlluraStanding from "../../assets/Allura-Standing.svg";
import "./Profile.css";

function ProfileSection({ showJobs, setShowJobs, showLJ, setShowLJ }) {
    console.log(showJobs);
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
