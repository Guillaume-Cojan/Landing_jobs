//import .env information
require("dotenv").config();

//Npm install mysql2 and then import the module here:
const mysql = require("mysql2");

//We use the mysql login details that are stored in .env here:
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = connection;

//mysql://bda4e96307de82:f0ef2cb9@us-cdbr-east-04.cleardb.com/heroku_cb95d913c021053?reconnect=true
