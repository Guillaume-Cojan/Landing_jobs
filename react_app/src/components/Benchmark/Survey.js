import React, { useState } from "react";
import SurveyList from "./SurveyList";
import { useTranslation } from "react-i18next";
import surveyFields from "./SurveyFields";

function Survey({ showLJ, showJobs, setShowResult, setGraphData }) {
const { t } = useTranslation()    
const [userSelection, setUserSelection] = useState({
        category: "notSelected",
        experience: "notSelected",
        location: "notSelected",
        industry: "notSelected",
        organisation: "notSelected",
    });

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
                html: t("please_select"),
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
        // mode: 'no-cors',
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

    return (
        <div className="survey-container">
            <h2
                className={
                    showLJ
                        ? showJobs
                            ? "survey-title-company"
                            : "survey-title-talent"
                        : "survey-title"
                }
            >
                {t("survey_title")}
            </h2>
<p className="survey-p">{t("survey_p")}</p>
                {
                surveyFields.map((field, index) => (
                    <SurveyList 
                        key={index} 
                        title={field.title} 
                        obligatory={field.obligatory}
                        list={field.list} 
                        setUserSelection={setUserSelection}
                        userSelection={userSelection} />
                ))
                }
  <div className="btn-container">
            <button className="btn-reset" 
            // onClick={handleResetClick}
            >
          {t("clear_fields")}
        </button>
            <button
                className={
                    showLJ
                        ? showJobs
                            ? "calculate-btn-company"
                            : "calculate-btn-talent"
                        : "calculate-btn"
                }
                onClick={handleCalculateClick}
            >
                {t("Calculate")}
            </button>
        </div>
        </div>
    );
}

export default Survey;
