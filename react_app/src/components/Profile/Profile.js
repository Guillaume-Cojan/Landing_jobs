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
            <div className="profile-card-content"> 
                <div className="profile-text">
                    <h2
                        className={id === 1 ? "profile-title-purple" : "profile-title-blue"}
                    >
                        {title}
                    </h2>
                    <p className="profile-content"> {content} </p>
                </div>
                <div className="profile-right-side">
                    <img className="profile-img" src={image} alt="worker" />
                </div>
            </div>
            <button
                    className={
                        id === 1 ? "bttn-get-started-purple" : "bttn-get-started-blue"
                    }
                    onClick={() => handleShowLJ()}
                >
                    {id === 1
                        ? "Gain Salary Insights"
                        : "Get my Salary Estimates"}
                </button>
        </div>
    );
};

export default Profile;
