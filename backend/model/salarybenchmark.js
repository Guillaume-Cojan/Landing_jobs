const { cpuUsage } = require("node:process");
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
    if (
        (formInput.location === "notSelected" ||
            formInput.location === "All") &&
        (formInput.organisation === "notSelected" ||
            formInput.organisation === "All") &&
        (formInput.industry === "notSelected" || formInput.industry === "All")
    ) {
        connection.query(
            "SELECT AVG(Avg_Salary) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? ",
            [formInput.category, formInput.experience],
            (err, result) => {
                console.log(" this is getDataSalary result", result);
                callback(err, result);
            }
        );
    } else if (
        (formInput.organisation === "notSelected" ||
            formInput.organisation === "All") &&
        (formInput.industry === "notSelected" || formInput.industry === "All")
    ) {
        connection.query(
            "SELECT AVG(Avg_Salary) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ",
            [formInput.category, formInput.experience, formInput.location],
            (err, result) => {
                console.log(" this is getDataSalary result", result);
                callback(err, result);
            }
        );
    } else if (
        (formInput.organisation === "notSelected" ||
            formInput.organisation === "All") &&
        (formInput.location === "notSelected" || formInput.location === "All")
    ) {
        connection.query(
            "SELECT AVG(Avg_Salary) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Industry = ? ",
            [formInput.category, formInput.experience, formInput.industry],
            (err, result) => {
                console.log(" this is getDataSalary result", result);
                callback(err, result);
            }
        );
    } else if (
        (formInput.location === "notSelected" ||
            formInput.location === "All") &&
        (formInput.industry === "notSelected" || formInput.industry === "All")
    ) {
        connection.query(
            "SELECT AVG(Avg_Salary) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Org_Type = ? ",
            [formInput.category, formInput.experience, formInput.organisation],
            (err, result) => {
                console.log(" this is getDataSalary result", result);
                callback(err, result);
            }
        );
    } else if (
        formInput.organisation === "notSelected" ||
        formInput.organisation === "All"
    ) {
        connection.query(
            "SELECT AVG(Avg_Salary) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Industry = ? ",
            [
                formInput.category,
                formInput.experience,
                formInput.location,
                formInput.industry,
            ],
            (err, result) => {
                console.log(" this is getDataSalary result", result);
                callback(err, result);
            }
        );
    } else if (
        formInput.industry === "notSelected" ||
        formInput.industry === "All"
    ) {
        connection.query(
            "SELECT AVG(Avg_Salary) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Org_Type = ?",
            [
                formInput.category,
                formInput.experience,
                formInput.location,
                formInput.organisation,
            ],
            (err, result) => {
                console.log(" this is getDataSalary result", result);
                callback(err, result);
            }
        );
    } else if (
        formInput.location === "notSelected" ||
        formInput.location === "All"
    ) {
        connection.query(
            "SELECT AVG(Avg_Salary) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Industry = ? AND Employer_Org_Type = ?",
            [
                formInput.category,
                formInput.experience,
                formInput.industry,
                formInput.organisation,
            ],
            (err, result) => {
                console.log(" this is getDataSalary result", result);
                callback(err, result);
            }
        );
    } else {
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
    }
};
//Min salary = blue column
Salary.getDataMinimumSalary = (formInput, callback) => {
    if (
        (formInput.location === "notSelected" ||
            formInput.location === "All") &&
        (formInput.organisation === "notSelected" ||
            formInput.organisation === "All") &&
        (formInput.industry === "notSelected" || formInput.industry === "All")
    ) {
        connection.query(
            "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? ORDER BY Avg_Salary ASC LIMIT 1",
            [formInput.category, formInput.experience],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        (formInput.organisation === "notSelected" ||
            formInput.organisation === "All") &&
        (formInput.industry === "notSelected" || formInput.industry === "All")
    ) {
        connection.query(
            "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ORDER BY Avg_Salary ASC LIMIT 1",
            [formInput.category, formInput.experience, formInput.location],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        (formInput.organisation === "notSelected" ||
            formInput.organisation === "All") &&
        (formInput.location === "notSelected" || formInput.location === "All")
    ) {
        connection.query(
            "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Industry = ? ORDER BY Avg_Salary ASC LIMIT 1",
            [formInput.category, formInput.experience, formInput.industry],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        (formInput.location === "notSelected" ||
            formInput.location === "All") &&
        (formInput.industry === "notSelected" || formInput.industry === "All")
    ) {
        connection.query(
            "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Org_Type = ? ORDER BY Avg_Salary ASC LIMIT 1",
            [formInput.category, formInput.experience, formInput.organisation],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        formInput.organisation === "notSelected" ||
        formInput.organisation === "All"
    ) {
        connection.query(
            "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Industry = ? ORDER BY Avg_Salary ASC LIMIT 1",
            [
                formInput.category,
                formInput.experience,
                formInput.location,
                formInput.industry,
            ],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        formInput.industry === "notSelected" ||
        formInput.industry === "All"
    ) {
        connection.query(
            "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Org_Type = ? ORDER BY Avg_Salary ASC LIMIT 1",
            [
                formInput.category,
                formInput.experience,
                formInput.location,
                formInput.organisation,
            ],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        formInput.location === "notSelected" ||
        formInput.location === "All"
    ) {
        connection.query(
            "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Industry = ? AND Employer_Org_Type = ? ORDER BY Avg_Salary ASC LIMIT 1",
            [
                formInput.category,
                formInput.experience,
                formInput.industry,
                formInput.organisation,
            ],
            (err, result) => {
                callback(err, result);
            }
        );
    } else {
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
    }
};

// Max salary = green column
Salary.getDataMaximumSalary = (formInput, callback) => {
    if (
        (formInput.location === "notSelected" ||
            formInput.location === "All") &&
        (formInput.organisation === "notSelected" ||
            formInput.organisation === "All") &&
        (formInput.industry === "notSelected" || formInput.industry === "All")
    ) {
        connection.query(
            "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? ORDER BY Avg_Salary DESC LIMIT 1",
            [formInput.category, formInput.experience],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        (formInput.organisation === "notSelected" ||
            formInput.organisation === "All") &&
        (formInput.industry === "notSelected" || formInput.industry === "All")
    ) {
        connection.query(
            "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ORDER BY Avg_Salary DESC LIMIT 1",
            [formInput.category, formInput.experience, formInput.location],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        (formInput.organisation === "notSelected" ||
            formInput.organisation === "All") &&
        (formInput.location === "notSelected" || formInput.location === "All")
    ) {
        connection.query(
            "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Industry = ? ORDER BY Avg_Salary DESC LIMIT 1",
            [formInput.category, formInput.experience, formInput.industry],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        (formInput.location === "notSelected" ||
            formInput.location === "All") &&
        (formInput.industry === "notSelected" || formInput.industry === "All")
    ) {
        connection.query(
            "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Org_Type = ? ORDER BY Avg_Salary DESC LIMIT 1",
            [formInput.category, formInput.experience, formInput.organisation],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        formInput.organisation === "notSelected" ||
        formInput.organisation === "All"
    ) {
        connection.query(
            "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Industry = ? ORDER BY Avg_Salary DESC LIMIT 1",
            [
                formInput.category,
                formInput.experience,
                formInput.location,
                formInput.industry,
            ],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        formInput.industry === "notSelected" ||
        formInput.industry === "All"
    ) {
        connection.query(
            "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Org_Type = ? ORDER BY Avg_Salary DESC LIMIT 1",
            [
                formInput.category,
                formInput.experience,
                formInput.location,
                formInput.organisation,
            ],
            (err, result) => {
                callback(err, result);
            }
        );
    } else if (
        formInput.location === "notSelected" ||
        formInput.location === "All"
    ) {
        connection.query(
            "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Industry = ? AND Employer_Org_Type = ? ORDER BY Avg_Salary DESC LIMIT 1",
            [
                formInput.category,
                formInput.experience,
                formInput.industry,
                formInput.organisation,
            ],
            (err, result) => {
                callback(err, result);
            }
        );
    } else {
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
    }
};

module.exports = Salary;
