const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const subscribersRoute = require("./routes/route-subscribers");
const salaryRoute = require("./routes/route-salarybenchmark");
const addSalaryRoute = require("./routes/route-salarybenchmark");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/salarybenchmark", salaryRoute, addSalaryRoute);
app.use("/subscribe", subscribersRoute);

app.listen(port, (err) => {
    if (err) throw new Error("Unable to launch Server");
    console.log(`Server running on port: ${port}`);
});
