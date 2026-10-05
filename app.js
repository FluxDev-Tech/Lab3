const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));  

app.get("/", (req, res) => {
    const student = {
        name: "John Lawrence V. Martinez",
        course: "BS Information Technology",
    };
    res.render("home", { student: student });
});

app.get('/about', (req, res) => {
    const aboutInfo = {
        description: " This is a simple web application built using Node.js and Express.js. It serves as a student portal where users can view information about the application, its services, and the developer.",
        developer: "John Lawrence V. Martinez"
    };

    res.render('about', { about: aboutInfo });
});

app.get('/services', (req, res) => {
    const services = [
        "Student registration",
        "View Announcements",
        "View Academic Records"
    ];

    res.render('services', { services: services });
});

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});