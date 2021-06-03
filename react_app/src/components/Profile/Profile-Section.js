import Profile from "./Profile"
import AlluraSitting from "../assets/Allura-Sitting.svg"
import AlluraStanding from "../assets/Allura-Standing.svg"
import "./Profile.css"

function ProfileSection() {


    return (
    
    <div className="profiles">
        <div className="profiles-container">
            <Profile 
                title={"Companies"} 
                content={"Teaser about companies datas, or some... ... like that. Teaser about companies datas, or some... like that...."}
                image={AlluraSitting}
            />
            <Profile
                title={"Talent"} 
                content={"Teaser about talent data, or some... ... like that. Teaser about talent data, or some... ...like that oooo."}
                image={AlluraSitting}
            />

        </div>
    </div>
    );
}

export default ProfileSection;
