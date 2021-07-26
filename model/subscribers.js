const pool = require("../config");

const Subscribers = {};

Subscribers.addNewSubscriber = (email, callback) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(
            "INSERT INTO subscribers(email) VALUES (?)",
            [email],
            (err, result) => {
                connection.release();
                if (err) throw err;
                callback(err, result);
            }
        );
    });
};

module.exports = Subscribers;
