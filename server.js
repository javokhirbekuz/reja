const http = require("http");
const mongodb = require("mongodb");

// MongoDB connect
const connectString =
    "mongodb+srv://joe_db_user:gOuO29T8L7YCUGzL@cluster0.4lcww7v.mongodb.net/Reja?retryWrites=true&w=majority";
mongodb.connect(
    connectString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) console.log("ERROR:", err);
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            const PORT = 3000;
            server.listen(PORT, () => {
                console.log(
                    `The app is running on the port: ${PORT}. http://localhost:${PORT}`
                );
            });
        }
    }
);
