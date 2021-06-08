import avatar from "../assets/avatar.svg"

const TalentCard = () => {
    return(
        <div className="talent-card">
            <img  className="talent-avatar" src={avatar} alt="avatar" /> 
            <div className="talent-right-side">
                <h3 className="talent-name">
                    Name Apelido Sobrenome
                </h3>
                <h2 className="talent-title">
                    UX/UI Designer
                </h2>
                <h3 className="talent-experience">
                    6 years of experience
                </h3>
            </div>
        </div>
    )
}

export default TalentCard;