import SurveyList from "./SurveyList";

function Survey() {
    return (
        <div className="survey-container">
            <h2 className="survey-title"> Salary Benchmarking </h2>
            <p>
                You can explore the features that we provide with fun and have
                their own functions each feature.
            </p>
            <SurveyList title={"Category"} />
            <SurveyList title={"Experience"} />
            <SurveyList title={"Location"} />
            <button className="calculate-btn">Calculate</button>
        </div>
    );
}

export default Survey;
