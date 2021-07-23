const Subscribers = require("../model/subscribers");

const addSubscriber = (req, res) => {
    Subscribers.addNewSubscriber(req.body.email, (err, result) => {
        if (err) {
            res.status(500).send(`Error adding subscriber: ${err}`);
        } else {
            const id = result.insertId;
            req.id = id;
            res.send("User succesfully added");
        }
    });
};

module.exports = { addSubscriber };
