const Subscribers = require("../model/subscribers");

const addSubscriber = (req, res) => {
    Subscribers.addNewSubscriber(req.body.email, (err, result) => {
        if (err) {
            res.status(500).send("Error adding subscriber :(");
        } else {
            const id = result.insertId;
            req.id = id;
            res.send("user added");
        }
    });
};

module.exports = { addSubscriber };
