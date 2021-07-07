import "./Profile.css";

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

    return (
        <div className="profile-card">
            <div className="profile-text">
                <h2
                    className={id === 1 ? "profile-title-cie" : "profile-title"}
                >
                    {title}
                </h2>
                <p className="profile-content"> {content} </p>
                <button
                    className={
                        id === 1 ? "bttn-get-started-cie" : "bttn-get-started"
                    }
                    onClick={() => handleShowLJ()}
                >
                    {id === 1
                        ? "Gain Salary Insights"
                        : "Get my Salary Estimates"}
                </button>
            </div>
            <div className="profile-right-side">
                <img className="profile-img" src={image} alt="worker" />
            </div>
        </div>
    );
};

export default Profile;
