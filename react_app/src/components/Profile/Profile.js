import "./Profile.css"

const Profile = ({title, content, image}) => {

    return(
        <div className="profile-card">

            {/* <div className="profile-left-side">
                <div className="profile-text"> */}
                    <h2 className="profile-title"> {title} </h2>
                    <p className="profile-content"> {content} </p>
                {/* </div> */}
                <button className="bttn-get-started"> Get Started </button>
            {/* </div> */}
            <div className="profile-right-side">
                <img className="profile-img" src={image} alt="worker" />
            </div>
        </div>
    )
}

export default Profile;