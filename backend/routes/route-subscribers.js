const express = require("express");
const router = express.Router();
const { addSubscriber } = require("../controller/subscribers-controller");

router.post("/", addSubscriber);

module.exports = router;
