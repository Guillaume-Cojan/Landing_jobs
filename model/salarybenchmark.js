const connection = require("../config");

const Salary = {};

Salary.getDataSalary = (callback) => {
  connection.query(
    'SELECT AVG(Avg_Salary) AS average_salary_calculation FROM salarybenchmark WHERE job_role = "Front-End Developer" AND Working_Experience_Aggregated = "0 - 3 years" AND Work_Company_PT_District = "Porto" ',
    (err, result) => {
      callback(err, result);
    }
  );
};

Salary.addDataSalary = (userInput, callback) => {
  console.log(userInput);
  let sql =
    "INSERT INTO `landing_pay`.`salarybenchmark` (`Work_Company_PT_District`, `Job_Role_Original`, `Working_Experience`) VALUES (?)";
  let post = {
    Work_Company_PT_District: userInput.Work_Company_PT_District,
    Job_Role_Original: userInput.Job_Role_Original,
    Working_Experience: userInput.Work_Company_PT_District,
  };
  connection.query(sql, post, (err, result) => {
    callback(err, result);
  });
};

module.exports = Salary;
