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
    "Unspecified...",
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
    "Guarda",
    "Portalegre",
    "Santarém",
    "Beja",
];

const industry = [
    "Unspecified...",
    "Financial and banking",
    "Software development - other",
    "Web development or design",
    "Consulting",
    "Retail or ecommerce",
    "Government or public administration",
    "Energy or utilities",
    "Software as a service (saas) development",
    "Cloud-based solutions or services",
    "Internet",
    "Telecommunications",
    "Healthcare or social services",
    "Information technology",
    "Transportation",
    "Data and analytics",
    "Education and training",
    "Manufacturing",
    "Media, advertising, publishing, or entertainment",
    "Marketing",
    "Security",
    "Travel",
    "Research - academic or scientific",
    "Real estate",
    "Nonprofit",
];

const organisation = [
    "Unspecified...",
    "Corporate",
    "SME - Small or Medium Enterprise (personnel <250)",
    "Startup (new business venture)",
    "Consulting Business",
    `Scale-up (fast growing company aka "unicorn")`,
    "Nearshore (outsource business processes to companies in a nearby country)",
    "Outsourcing",
];

function Survey({ showLJ, showJobs, setShowResult, setGraphData }) {
<<<<<<< HEAD
    const [userSelection, setUserSelection] = useState({});
    const { t, i18next } = useTranslation()
    
=======
    const [userSelection, setUserSelection] = useState({
        category: "notSelected",
        experience: "notSelected",
        location: "notSelected",
        industry: "notSelected",
        organisation: "notSelected",
    });
>>>>>>> 5cf75b41c9778def86988943493bcf6f5d502bc7

    console.log("Right now selection is : ", userSelection);

    const handleCalculateClick = () => {
        const Swal = require("sweetalert2");
        if (
            (userSelection.category === "notSelected" &&
                userSelection.experience === "notSelected") ||
            userSelection.category === "notSelected" ||
            userSelection.experience === "notSelected"
        ) {
            setShowResult(false);
            Swal.fire({
                icon: "info",
                html: "Please select at least a <b>Category</b> and <b>Experience</b>!",
                confirmButtonColor: "#3bbcb0",
            });
        } else {
            setShowResult(true);
            sendSelectionToBE();
        }
    };

    const sendSelectionToBE = () => {
        if (
            userSelection.category &&
            userSelection.experience &&
            userSelection.location &&
            userSelection.industry &&
            userSelection.organisation
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
            <SurveyList
                title={"Industry"}
                list={industry}
                setUserSelection={setUserSelection}
                userSelection={userSelection}
            />
            <SurveyList
                title={"Organisation"}
                list={organisation}
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
