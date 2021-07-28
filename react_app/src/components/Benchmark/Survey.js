import React, { useState } from "react";
import SurveyList from "./SurveyList";
import { useTranslation } from "react-i18next";
import surveyFields from "./SurveyFields";

function Survey({ showLJ, showJobs, setShowResult, setGraphData }) {
    const { t } = useTranslation();
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
            fetch("https://landing-pay-server.herokuapp.com/salarybenchmark/", {
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
            {surveyFields.map((field, index) => (
                <SurveyList
                    key={index}
                    title={field.title}
                    obligatory={field.obligatory}
                    list={field.list}
                    setUserSelection={setUserSelection}
                    userSelection={userSelection}
                />
            ))}
            <div className="btn-container">
                <button
                    className={
                        showLJ
                            ? showJobs
                                ? "cancel-btn-company"
                                : "cancel-btn-talent"
                            : "cancel-btn"
                    }
                    onClick={() => window.location.reload(false)}
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
