const TalentCard = ({ avatar, name, title, experience }) => {
    return (
        <div className="talent-card">
            <div className="talent-description">
                <img className="talent-avatar" src={avatar} alt="avatar" />
                <div className="talent-details">
                    <h3 className="talent-name">{name}</h3>
                    <h2 className="talent-title">{title}</h2>
                    <h3 className="talent-experience">{experience}</h3>
                </div>
            </div>
        </div>
    );
};

export default TalentCard;
