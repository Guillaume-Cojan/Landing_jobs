import React, { useState } from "react";
import SurveyList from "./SurveyList";
import { useTranslation } from "react-i18next";

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
    "Lisboa",
    "Coimbra",
    "Açores",
    "Braga",
    "Viseu",
    "Aveiro",
    "Porto",
    "Madeira",
    "Leiria",
    "Viana do Castelo",
    "Castelo Branco",
    "Other",
    "Faro",
    "Vila Real",
    "Setúbal",
    "Évora",
    "Bragança",
    "Guarda",
    "Portalegre",
    "Santarém",
    "Beja",
];

function Survey({ showLJ, showJobs, setShowResult, setGraphData }) {
    const [userSelection, setUserSelection] = useState({});
    const { t, i18next } = useTranslation()
    

    console.log("Right now selection is : ", userSelection);

    const handleCalculateClick = () => {
        setShowResult(true);
        sendSelectionToBE();
    };

    const sendSelectionToBE = () => {
        if (
            userSelection.category &&
            userSelection.experience &&
            userSelection.location
        ) {
            fetch("http://localhost:5000/salarybenchmark/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ formSelection: userSelection }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setGraphData(data);
                });
        }
    };

    // useEffect( sendSelectionToBE, [userSelection])

    return (
        <div className="survey-container">
            <h2
                className={
                    showLJ
                        ? showJobs
                            ? "survey-title-cie"
                            : "survey-title-talent"
                        : "survey-title"
                }
            >
                {t("survey_title")}
            </h2>
            <p className="survey-p">{t("survey_p")}</p>
            <SurveyList
                title={t("Category")}
                list={category}
                setUserSelection={setUserSelection}
                userSelection={userSelection}
            />
            <SurveyList
                title={t("Experience")}
                list={experience}
                setUserSelection={setUserSelection}
                userSelection={userSelection}
            />
            <SurveyList
                title={t("Location")}
                list={location}
                setUserSelection={setUserSelection}
                userSelection={userSelection}
            />
            <button
                className={
                    showLJ
                        ? showJobs
                            ? "calculate-btn-cie"
                            : "calculate-btn-talent"
                        : "calculate-btn"
                }
                onClick={handleCalculateClick}
            >
                {t("Calculate")}
            </button>
        </div>
    );
}

export default Survey;
