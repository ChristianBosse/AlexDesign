const db = require("../config/dbConfig");
const bcrypt = require("bcrypt");

const createUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    const values = [username, hashedPassword];
    db.query(query, values, (err, result) => {
        if (err) throw err;
        console.log("User created:", result.insertId);
    });
};

const findUserByUsername = (username, callback) => {
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result[0]);
    });
};

module.exports = {
    createUser,
    findUserByUsername,
};
