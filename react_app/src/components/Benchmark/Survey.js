import React, { useState, useEffect } from "react";
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

function Survey({ showLJ, showJobs, setShowResult }) {
    
    const [ userSelection, setUserSelection] = useState({})

    console.log("Right now selection is : ", userSelection)

    const handleCalculateClick = () => {
                setShowResult(true)
             }

    const sendSelectionToBE = () => {
        if(userSelection.Category && userSelection.Experience && userSelection.Location){ fetch("http://localhost:5000/salarybenchmark/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({formSelection: userSelection}),
        })}
        // else {
        //     console.log("not yet")
        // }
    }
   

    useEffect( sendSelectionToBE, [userSelection])
 
   
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
            <p className="survey-p">
                You can explore the features that we provide with fun and have
                their own functions each feature.
            </p>
            <SurveyList title={"Category"} list={category} setUserSelection={setUserSelection} userSelection={userSelection}/>
            <SurveyList title={"Experience"} list={experience} setUserSelection={setUserSelection} userSelection={userSelection}/>
            <SurveyList title={"Location"} list={location} setUserSelection={setUserSelection} userSelection={userSelection}/>
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
        </div>
    );
}

export default Survey;










//{ showLJ, showJobs, setShowResult }

// class Survey extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Category: "empty category",
//             Experience: "empty experience",
//             Location: "empty location"
//         }

//      } 
     
//      handleCalculateClick() {
//         this.props.setShowResult(true)
//      }



//     render() {    
//         const { showLJ, showJobs} = this.props;
//     return (
//         <div className="survey-container">
//             <h2
//                 className={
//                     showLJ
//                         ? showJobs
//                             ? "survey-title-cie"
//                             : "survey-title-talent"
//                         : "survey-title"
//                 }
//             >
//                 Salary Benchmarking
//             </h2>
//             <p className="survey-p">
//                 You can explore the features that we provide with fun and have
//                 their own functions each feature.
//             </p>
//             <SurveyList title={"Category"} list={category} state={this.state.C} setState={this.setState}/>
//             <SurveyList title={"Experience"} list={experience} setState={this.setState}/>
//             <SurveyList title={"Location"} list={location} setState={this.setState}/>
//             <button
//                 className={
//                     showLJ
//                         ? showJobs
//                             ? "calculate-btn-cie"
//                             : "calculate-btn-talent"
//                         : "calculate-btn"
//                 }
//                 onClick={() => this.handleCalculateClick()}
//             >
//                 Calculate
//             </button>
//         </div>
//     );}
// }


// export default Survey;
