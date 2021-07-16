import React, { useState } from "react";
import SurveyList from "./SurveyList";
import surveyFields from "./SurveyFields";

function Survey({ showLJ, showJobs, setShowResult, setGraphData }) {
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
                html: "Please select the <b>Category</b> and <b>Experience</b> fields!",
                confirmButtonColor: "#3bbcb0",
            });
        } else {
            setShowResult(true);
            sendSelectionToBE();
        }
    };

    const handleResetClick = () => {
        window.location.reload(false);
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
                Salary Benchmarking
            </h2>
            <p className="survey-p">Put the power of "pay" into your hands.</p>
            {surveyFields.map((field, index) => (
                <SurveyList
                    key={index}
                    title={field.title}
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
                            ? "calculate-btn-company"
                            : "calculate-btn-talent"
                        : "calculate-btn"
                }
                onClick={handleCalculateClick}
            >
                Calculate
            </button>
            <button className="btn-reset" onClick={handleResetClick}>
          Clear fields
        </button>
        </div>
        </div>
    );
}

export default Survey;
