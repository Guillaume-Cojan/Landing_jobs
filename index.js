const express = require("express");
const connection = require("./config");
const app = express();

//npm install cors  (a module that helps avoid errors on frontend)
const cors = require("cors");

//declare the port that the backend server will run on. This will be a different port than what the frontend server runs on
const port = 5000;

//Importing routes
const subscribersRoute = require("./routes/route-subscribers");
const salaryRoute = require("./routes/route-salarybenchmark");
const addSalaryRoute = require("./routes/route-salarybenchmark");
const { connect } = require("./config");

// global middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Make sure that you are connected to the mysql database. If you get this error then go back to .env and the config files for debugging.
connection.connect((err) => {
  if (err) {
    console.error(`Error connecting. Error: ${err.stack}`);
    return;
  }
  console.log("connected to database with threadId :  " + connection.threadId);
});

//Middlewares:
app.post("/salarybenchmark", (req, res) => {
  connection.query(
    "INSERT INTO `landing_pay`.`salarybenchmark` (`Work_Company_PT_District`, `Job_Role_Original`, `Working_Experience`) VALUES (?)",
    [req.body],
    (err, results) => {
      if (err) {
        res.status(500).json(`${err}`);
      } else {
        res.status(201).json(results);
        console.log(req.body);
      }
    }
  );
});

//Salarybenchmark middleware
app.use("/salarybenchmark", salaryRoute, addSalaryRoute); 

//Subscribers middleware
app.use("/subscribe", subscribersRoute);

//Make sure that the server is actually running. If it's not, you will get this error (make sure you have all the modules imported correctly or installed with npm if you get an error here)
app.listen(port, (err) => {
  if (err) throw new Error("Server is not working!");
  console.log(`Server is running on port: ${port}`);
});
