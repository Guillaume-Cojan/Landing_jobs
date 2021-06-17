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
      <h2 className="profile-title"> {title} </h2>
      <p className="profile-content"> {content} </p>
      <button className="bttn-get-started" onClick={() => handleShowLJ()}>
        {" "}
        Get Started{" "}
      </button>
      </div>
      <div className="profile-right-side">
         <img className="profile-img" src={image} alt="worker" /> 
      </div>
    </div>
  );
};

export default Profile;
