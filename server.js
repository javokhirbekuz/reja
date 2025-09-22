const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/users.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERRROR:", err);
    } else {
        user = JSON.parse(data);
    }
});
// // 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", (req, res) => {
    res.render("harid");
});

const server = http.createServer(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(
        `The app is running on the port: ${PORT}. http://localhost:${PORT}`
    );
});
