import avatar from "../assets/avatar.svg"

const TalentCard = () => {
    return(
        <div className="job-card">
            <div className="job-logo"> 
                <img  className="talent-avatar" src={avatar} alt="avatar" /> 
            </div>
            <h2 className="job-title">
                Name Apelido Sobrenome
            </h2>
            <div className="company-location">
                <h3 className="company-name">
                    UX/UI Designer
                </h3>
                <h3 className="location">
                    6 years of experience
                </h3>
            </div>

            <button className="bttn-job-details"> View more details </button>
        </div>
    )
}

export default TalentCard;