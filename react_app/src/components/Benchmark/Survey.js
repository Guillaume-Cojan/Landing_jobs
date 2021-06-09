import SurveyList from "./SurveyList";

const category = [
    "Back-End Developer",
    "Business Applications (BI/CRM/ERP)",
    "Computer & Network Security",
    "CTO",
    "Data Scientist/Data Engineer",
    "DevOps Engineer",
    "Front-End Developer",
    "Full-Stack Developer",
    "Maintenance & Support",
    "Mobile Apps Developer",
    "Product Owner/Product Manager",
    "Project Manager",
    "Quality Assurance/Testing",
    "Scrum Master",
    "Solutions Architect",
    "SysAdmin Engineer",
    "Technical Team Leader",
    "UX/UI Designer",
];

const experience = ["0 Years", "0 - 3 years", "3 - 6 years", "6+ years"];

const location = [
    "Lisboa, Lisbon Metropolitan Area",
    "Coimbra, Centre",
    "Açores, Azores and Madeira",
    "Braga, North",
    "Viseu, Centre",
    "Aveiro, Centre",
    "Porto, Porto Metropolitan Area",
    "Madeira, Azores and Madeira",
    "Leiria, Centre",
    "Viana do Castelo, North",
    "Castelo Branco, Centre",
    "Other, Other",
    "Faro, South",
    "Vila Real, North",
    "Setúbal, Lisbon Metropolitan Area",
    "Évora, South",
    "Bragança, North",
    "Guarda, Centre",
    "Portalegre, South",
    "Santarém, Centre",
    "Beja, South",
];

function Survey() {
    return (
        <div className="survey-container">
            <h2 className="survey-title"> Salary Benchmarking </h2>
            <p>
                You can explore the features that we provide with fun and have
                their own functions each feature.
            </p>
            <SurveyList title={"Category"} list={category} />
            <SurveyList title={"Experience"} list={experience} />
            <SurveyList title={"Location"} list={location} />
            <button className="calculate-btn">Calculate</button>
        </div>
    );
}

export default Survey;