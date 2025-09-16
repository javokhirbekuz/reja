const express = require("express");
const app = express();
const http = require("http");

// // 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
// app.set("views", "views");
// app.set("view engine", "ejs");

// 4: Routing code
app.get("/hello", (req, res) => {
    res.send(
        `<h1 style="color: aqua; text-align: center;  font-size: 128px; ">Hello world</h1>`
    );
});

app.get("/gift", (req, res) => {
    res.send(
        `<h1 style="color: aqua; text-align: center; font-size: 128px; ">You're at Gifts Page</h1>`
    );
});

// const server = http.createServer(app);
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/", (req, res) => {
    res.render("harid");
});

app.get("/hello", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});
const server = http.createServer(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The app is running on the port: ${PORT}`);
});
