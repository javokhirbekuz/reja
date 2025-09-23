console.log("WEB Serverni boshlash");
const fs = require("fs");
const express = require("express");
const app = express();

let user;
fs.readFile("./database/users.json", "utf8", (err, data) => {
    if (err) console.log("ERROR:", err);
    else {
        user = JSON.parse(data);
    }
});

// requiring MongoDB
const db = require("./server").db();

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
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        res.json(data.ops[0]);
    });
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", (req, res) => {
    console.log("user entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log("ERROR:", err);
                res.end("Something went wrong!");
            } else {
                res.render("reja", { items: data });
            }
        });
});

module.exports = app;
