function SurveyList({ title }) {
    return (
        <div className="survey-list-container">
            <h3>{title}</h3>
            <select className="select">
                <option value="value1">Value 1</option>
                <option value="value2">Value 2</option>
                <option value="value3">Value 3</option>
            </select>
        </div>
    );
}

export default SurveyList;
