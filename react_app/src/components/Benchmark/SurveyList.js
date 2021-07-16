import React from "react";
import Select from "react-select";

function SurveyList({
  title,
  obligatory,
  list,
  setUserSelection,
  userSelection,
}) {
  const options = [];

  list.forEach(function (element) {
    options.push({ label: element, value: element });
  });

  const handleSelectChanges = (e, name) => {
    setUserSelection({ ...userSelection, [name.name]: e.value });
  };

  return (
    <div className="survey-list-container">
      <h3>
        {title} {obligatory}
      </h3>

      <Select
        name={title.toLowerCase()}
        options={options}
        className="select"
        onChange={handleSelectChanges}
      />
    </div>
  );
}

export default SurveyList;
