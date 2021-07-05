const connection = require("../config");

const Salary = {};


Salary.addDataSalary = (userInput, callback) => {

    jobRole = userInput.formSelection.category;
    experience = userInput.formSelection.experience;
    location = userInput.formSelection.location;

    let sqlQuery = "SELECT Job_Role, Working_Experience_Aggregated, Work_Company_PT_District FROM salarybenchmark WHERE job_role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? "
    let sqlValues = []
    sqlValues.push(jobRole, experience, location)
    connection.query(sqlQuery, sqlValues, (err, result) => {
        callback(err, result)
        });
        };

      
     
Salary.getDataSalary = (formInput, callback) => {
    connection.query('SELECT AVG(Avg_Salary) AS average_salary FROM salarybenchmark WHERE job_role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ', [ formInput.category, formInput.experience, formInput.location ], 
    (err, result) => {
       callback(err, result);
    }
  );
};

Salary.getDataMinimumSalary = (formInput, callback) => {
    connection.query('SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE job_role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ORDER BY Avg_Salary ASC LIMIT 1', [ formInput.category, formInput.experience, formInput.location ], 
    (err, result) => {
        callback(err, result);
    }
    )};

Salary.getDataMaximumSalary = (formInput, callback) => {
    connection.query('SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE job_role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ORDER BY Avg_Salary DESC LIMIT 1', [ formInput.category, formInput.experience, formInput.location ], 
    (err, result) => {
         callback(err, result);
    }
    )};


module.exports = Salary;
