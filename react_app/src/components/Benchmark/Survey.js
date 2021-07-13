import React, { useState } from "react";
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

const industry = [
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
  "Corporate",
  "SME - Small or Medium Enterprise (personnel <250)",
  "Startup (new business venture)",
  "Consulting Business",
  `Scale-up (fast growing company aka "unicorn")`,
  "Nearshore (outsource business processes to companies in a nearby country)",
  "Outsourcing",
];

function Survey({ showLJ, showJobs, setShowResult, setGraphData }) {
  const [userSelection, setUserSelection] = useState({});

  console.log("Right now selection is : ", userSelection);

  const handleCalculateClick = () => {
    setShowResult(true);
    sendSelectionToBE();
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
        Salary Benchmarking
      </h2>
      <p className="survey-p">Put the power of "pay" into your hands.</p>
      <SurveyList
        title={"Category"}
        list={category}
        setUserSelection={setUserSelection}
        userSelection={userSelection}
      />
      <SurveyList
        title={"Experience"}
        list={experience}
        setUserSelection={setUserSelection}
        userSelection={userSelection}
      />
      <SurveyList
        title={"Location"}
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
      <div className="calculate-button-container">
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
          Calculate
        </button>
        <button className="btn-reset" onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Survey;
