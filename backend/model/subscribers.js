// Emails collection: create 1 database for emails collection (1 id + 1 email) → POST method
const connection = require("../config");

const Subscribers = {};

Subscribers.addNewSubscriber = (email, callback) => {
    connection.query(
        "INSERT INTO subscribers(email) VALUES (?)",
        [email],
        (err, result) => {
            callback(err, result);
        }
    );
};

module.exports = Subscribers;
