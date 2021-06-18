//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//            Importing modules
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//express is the framework we use for setting up the server
const express = require("express");
const connection = require("./config");
const app = express();

//npm install cors  (a module that helps avoid errors on frontend)
const cors = require("cors");

//declare the port that the backend server will run on. This will be a different port than what the frontend server runs on
const port = 3000;

//Importing a query to see all the data on the salary table in mysql. This from the model folder
const getAll = require("./model/salarybenchmark");

//Importing routes
const subscribersRoute = require("./routes/route-subscribers");

// global middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Make sure that you are connected to the mysql database. If you get this error then go back to .env and the config files for debugging.
connection.connect((err) => {
    if (err) {
        console.error(`Error connecting. Error: ${err.stack}`);
        return;
    }
    console.log(
        "connected to database with threadId :  " + connection.threadId
    );
});

//Setting an api route. For now this is here but we will move this to the routes folder next
app.get("/api/salaryex", (req, res) => {
    connection
        .promise()
        .query(getAll)
        .then(([result]) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).send("Error retrieving data");
        });
});

//We use the getAll function in the route above, but it is the same as writing this:
// app.get("/api/salaryex", (req, res) => {
//   connection.promise().query("SELECT * FROM salaryex")
//     .then(([result]) => {
//       res.status(200).json(result)
//     })
//     .catch((err) => {
//       res.status(500).send("Error retrieving data")
//     })
// })

//Use the route for subscribers
app.use("/subscribe", subscribersRoute);

//Make sure that the server is actually running. If it's not, you will get this error (make sure you have all the modules imported correctly or installed with npm if you get an error here)
app.listen(port, (err) => {
    if (err) throw new Error("Server is not working!");
    console.log(`Server is running on port: ${port}`);
});
