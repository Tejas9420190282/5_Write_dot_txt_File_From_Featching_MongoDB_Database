// main.js

const express = require("express");
const colors = require("colors");
const { connectDB } = require("./config/db");
const {
    register_Admin_Router,
} = require("./router/admin/register_Admin_Router");

const app = express();

const PORT = 7878;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// admin
app.use(register_Admin_Router);

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`.bgGreen);
        });
    } catch (error) {
        console.log(`Error in startServer`.bgRed);
    }
};

startServer();
