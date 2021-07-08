const connection = require("../config");

const Salary = {};

//Sent user info to back
Salary.addDataSalary = (userInput, callback) => {
  jobRole = userInput.formSelection.category;
  experience = userInput.formSelection.experience;
  location = userInput.formSelection.location;
  industry = userInput.formSelection.industry;
  organisation = userInput.formSelection.organisation;

  let sqlQuery =
    "SELECT Job_Role, Working_Experience_Aggregated, Work_Company_PT_District, Employer_Industry,  Employer_Org_Type FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Industry = ? AND Employer_Org_Type = ? ";
  let sqlValues = [];
  sqlValues.push(jobRole, experience, location, industry, organisation);
  connection.query(sqlQuery, sqlValues, (err, result) => {
    callback(err, result);
  });
};

// backend returns average salary based on user input for user to compare

Salary.getDataSalary = (formInput, callback) => {
  console.log(formInput);
  connection.query(
    "SELECT AVG(Avg_Salary) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Industry = ? AND Employer_Org_Type = ?",
    [
      formInput.category,
      formInput.experience,
      formInput.location,
      formInput.industry,
      formInput.organisation,
    ],
    (err, result) => {
      console.log(" this is getDataSalary result", result);
      callback(err, result);
    }
  );
};
//Min salary = blue column
Salary.getDataMinimumSalary = (formInput, callback) => {
  connection.query(
    "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Industry = ? AND Employer_Org_Type = ? ORDER BY Avg_Salary ASC LIMIT 1",
    [
      formInput.category,
      formInput.experience,
      formInput.location,
      formInput.industry,
      formInput.organisation,
    ],
    (err, result) => {
      callback(err, result);
    }
  );
};

// Max salary = green column
Salary.getDataMaximumSalary = (formInput, callback) => {
  connection.query(
    "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Industry = ? AND Employer_Org_Type = ? ORDER BY Avg_Salary DESC LIMIT 1",
    [
      formInput.category,
      formInput.experience,
      formInput.location,
      formInput.industry,
      formInput.organisation,
    ],
    (err, result) => {
      callback(err, result);
    }
  );
};

module.exports = Salary;
