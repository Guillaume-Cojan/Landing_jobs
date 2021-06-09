import Select from "react-select";

function SurveyList({ title, list }) {
    const options = [];

    list.forEach(function (element) {
        options.push({ label: element, value: element });
    });
    console.log(options);
    return (
        <div className="survey-list-container">
            <h3>{title}</h3>
            <Select options={options} className="select" />
        </div>
    );
}

export default SurveyList;
