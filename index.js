const express = require("express");
const connection = require("./config");
const app = express();
const cors = require('cors');
const port = 3000;
const getAll = require("./model/salarybenchmark")

// global middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())


connection.connect((err)=>{
    if(err) {
      console.error(`Error connecting. Error: ${err.stack}`)
      return;
    }
    console.log('connected to database with threadId :  ' + connection.threadId);
})

// app.get("/api/salaryex", (req, res) => {
//   connection.promise().query("SELECT * FROM salaryex")
//     .then(([result]) => {
//       res.status(200).json(result)
//     })
//     .catch((err) => {
//       res.status(500).send("Error retrieving data")
//     })
// })

app.get("/api/salaryex", (req, res) => {
  connection.promise().query(getAll)
    .then(([result]) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      res.status(500).send("Error retrieving data")
    })
})

app.listen(port, (err) => {
    if(err) throw new Error('Something did not work :/ ...')
    console.log(`Server is running on port: ${port}`)
  })