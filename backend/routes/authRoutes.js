const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
require("dotenv").config();

const router = express.Router();

// User registration
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if user already exists
        userModel.findUserByUsername(username, async (err, user) => {
            if (user) {
                return res.status(400).json({ error: "User already exists" });
            }
            // Create new user
            await userModel.createUser(username, password);
            res.status(201).json({ message: "User registered successfully" });
        });
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
});

// User login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    userModel.findUserByUsername(username, async (err, user) => {
        if (!user) {
            return res
                .status(400)
                .json({ error: "Invalid username or password" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ error: "Invalid username or password" });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h",
            }
        );

        res.json({ token });
    });
});

module.exports = router;
