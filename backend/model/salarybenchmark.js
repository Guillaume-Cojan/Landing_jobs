const connection = require("../config");

const Salary = {};

let jobRole = "Back-End Developer";
let experience = "0 Years";
let location = "Porto";

Salary.addDataSalary = (userInput, callback) => {
    console.log(userInput.formSelection);
    jobRole = userInput.formSelection.Category;
    experience = userInput.formSelection.Experience;
    location = userInput.formSelection.Location;

    let sqlQuery = "SELECT Job_Role, Working_Experience_Aggregated, Work_Company_PT_District FROM salarybenchmark WHERE job_role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? "
    let sqlValues = []
    sqlValues.push(userInput.Job_Role, userInput.Working_Experience_Aggregated, userInput.Work_Company_PT_District)
    connection.query(sqlQuery, sqlValues, (err, result) => {
        callback(err, result)
        });
        };

      
     
Salary.getDataSalary = (callback) => {
    connection.query('SELECT AVG(Avg_Salary) AS average_salary FROM salarybenchmark WHERE job_role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ', [ jobRole, experience, location ], 
    (err, result) => {
       callback(err, result);
    }
  );
};

Salary.getDataMinimumSalary = (callback) => {
    connection.query('SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE job_role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ORDER BY Avg_Salary ASC LIMIT 1', [ jobRole, experience, location ], 
    (err, result) => {
        callback(err, result);
    }
    )};

Salary.getDataMaximumSalary = (callback) => {
    connection.query('SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE job_role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ORDER BY Avg_Salary DESC LIMIT 1', [ jobRole, experience, location ], 
    (err, result) => {
         callback(err, result);
    }
    )};


module.exports = Salary;
