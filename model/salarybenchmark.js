const pool = require("../config");

const Salary = {};

Salary.addDataSalary = (userInput, callback) => {
    let sqlQuery =
        "SELECT Job_Role, Working_Experience_Aggregated, Work_Company_PT_District, Employer_Industry,  Employer_Org_Type FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Industry = ? AND Employer_Org_Type = ? ";
    let sqlValues = [];

    sqlValues.push(
        userInput.category,
        userInput.experience,
        userInput.location,
        userInput.industry,
        userInput.organisation
    );
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(sqlQuery, sqlValues, (err, result) => {
            connection.release();
            if (err) throw err;
            callback(err, result);
        });
    });
};

Salary.getDataSalary = (formInput, callback) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        if (
            (formInput.location === "notSelected" ||
                formInput.location === "Unspecified...") &&
            (formInput.organisation === "notSelected" ||
                formInput.organisation === "Unspecified...") &&
            (formInput.industry === "notSelected" ||
                formInput.industry === "Unspecified...")
        ) {
            connection.query(
                "SELECT ROUND(AVG(Avg_Salary) ,0) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? ",
                [formInput.category, formInput.experience],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            (formInput.organisation === "notSelected" ||
                formInput.organisation === "Unspecified...") &&
            (formInput.industry === "notSelected" ||
                formInput.industry === "Unspecified...")
        ) {
            connection.query(
                "SELECT ROUND(AVG(Avg_Salary) ,0) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ",
                [formInput.category, formInput.experience, formInput.location],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            (formInput.organisation === "notSelected" ||
                formInput.organisation === "Unspecified...") &&
            (formInput.location === "notSelected" ||
                formInput.location === "Unspecified...")
        ) {
            connection.query(
                "SELECT ROUND(AVG(Avg_Salary) ,0) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Industry = ? ",
                [formInput.category, formInput.experience, formInput.industry],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            (formInput.location === "notSelected" ||
                formInput.location === "Unspecified...") &&
            (formInput.industry === "notSelected" ||
                formInput.industry === "Unspecified...")
        ) {
            connection.query(
                "SELECT ROUND(AVG(Avg_Salary) ,0) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Org_Type = ? ",
                [
                    formInput.category,
                    formInput.experience,
                    formInput.organisation,
                ],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            formInput.organisation === "notSelected" ||
            formInput.organisation === "Unspecified..."
        ) {
            connection.query(
                "SELECT ROUND(AVG(Avg_Salary) ,0) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Industry = ? ",
                [
                    formInput.category,
                    formInput.experience,
                    formInput.location,
                    formInput.industry,
                ],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            formInput.industry === "notSelected" ||
            formInput.industry === "Unspecified..."
        ) {
            connection.query(
                "SELECT ROUND(AVG(Avg_Salary) ,0) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Org_Type = ?",
                [
                    formInput.category,
                    formInput.experience,
                    formInput.location,
                    formInput.organisation,
                ],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            formInput.location === "notSelected" ||
            formInput.location === "Unspecified..."
        ) {
            connection.query(
                "SELECT ROUND(AVG(Avg_Salary) ,0) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Industry = ? AND Employer_Org_Type = ?",
                [
                    formInput.category,
                    formInput.experience,
                    formInput.industry,
                    formInput.organisation,
                ],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else {
            connection.query(
                "SELECT ROUND(AVG(Avg_Salary) ,0) AS average_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? AND Employer_Industry = ? AND Employer_Org_Type = ?",
                [
                    formInput.category,
                    formInput.experience,
                    formInput.location,
                    formInput.industry,
                    formInput.organisation,
                ],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        }
    });
};

Salary.getDataMinimumSalary = (formInput, callback) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        if (
            (formInput.location === "notSelected" ||
                formInput.location === "Unspecified...") &&
            (formInput.organisation === "notSelected" ||
                formInput.organisation === "Unspecified...") &&
            (formInput.industry === "notSelected" ||
                formInput.industry === "Unspecified...")
        ) {
            connection.query(
                "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? ORDER BY Avg_Salary ASC LIMIT 1",
                [formInput.category, formInput.experience],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            (formInput.organisation === "notSelected" ||
                formInput.organisation === "Unspecified...") &&
            (formInput.industry === "notSelected" ||
                formInput.industry === "Unspecified...")
        ) {
            connection.query(
                "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ORDER BY Avg_Salary ASC LIMIT 1",
                [formInput.category, formInput.experience, formInput.location],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            (formInput.organisation === "notSelected" ||
                formInput.organisation === "Unspecified...") &&
            (formInput.location === "notSelected" ||
                formInput.location === "Unspecified...")
        ) {
            connection.query(
                "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Industry = ? ORDER BY Avg_Salary ASC LIMIT 1",
                [formInput.category, formInput.experience, formInput.industry],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            (formInput.location === "notSelected" ||
                formInput.location === "Unspecified...") &&
            (formInput.industry === "notSelected" ||
                formInput.industry === "Unspecified...")
        ) {
            connection.query(
                "SELECT Avg_Salary AS minimum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Org_Type = ? ORDER BY Avg_Salary ASC LIMIT 1",
                [
                    formInput.category,
                    formInput.experience,
                    formInput.organisation,
                ],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            formInput.organisation === "notSelected" ||
            formInput.organisation === "Unspecified..."
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
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            formInput.industry === "notSelected" ||
            formInput.industry === "Unspecified..."
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
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            formInput.location === "notSelected" ||
            formInput.location === "Unspecified..."
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
                    connection.release();
                    if (err) throw err;
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
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        }
    });
};

Salary.getDataMaximumSalary = (formInput, callback) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        if (
            (formInput.location === "notSelected" ||
                formInput.location === "Unspecified...") &&
            (formInput.organisation === "notSelected" ||
                formInput.organisation === "Unspecified...") &&
            (formInput.industry === "notSelected" ||
                formInput.industry === "Unspecified...")
        ) {
            connection.query(
                "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? ORDER BY Avg_Salary DESC LIMIT 1",
                [formInput.category, formInput.experience],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            (formInput.organisation === "notSelected" ||
                formInput.organisation === "Unspecified...") &&
            (formInput.industry === "notSelected" ||
                formInput.industry === "Unspecified...")
        ) {
            connection.query(
                "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Work_Company_PT_District = ? ORDER BY Avg_Salary DESC LIMIT 1",
                [formInput.category, formInput.experience, formInput.location],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            (formInput.organisation === "notSelected" ||
                formInput.organisation === "Unspecified...") &&
            (formInput.location === "notSelected" ||
                formInput.location === "Unspecified...")
        ) {
            connection.query(
                "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Industry = ? ORDER BY Avg_Salary DESC LIMIT 1",
                [formInput.category, formInput.experience, formInput.industry],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            (formInput.location === "notSelected" ||
                formInput.location === "Unspecified...") &&
            (formInput.industry === "notSelected" ||
                formInput.industry === "Unspecified...")
        ) {
            connection.query(
                "SELECT Avg_Salary AS maximum_salary FROM salarybenchmark WHERE Job_Role = ? AND Working_Experience_Aggregated = ? AND Employer_Org_Type = ? ORDER BY Avg_Salary DESC LIMIT 1",
                [
                    formInput.category,
                    formInput.experience,
                    formInput.organisation,
                ],
                (err, result) => {
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            formInput.organisation === "notSelected" ||
            formInput.organisation === "Unspecified..."
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
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            formInput.industry === "notSelected" ||
            formInput.industry === "Unspecified..."
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
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        } else if (
            formInput.location === "notSelected" ||
            formInput.location === "Unspecified..."
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
                    connection.release();
                    if (err) throw err;
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
                    connection.release();
                    if (err) throw err;
                    callback(err, result);
                }
            );
        }
    });
};

module.exports = Salary;