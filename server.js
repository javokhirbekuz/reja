const http = require("http");
const mongodb = require("mongodb");

// MongoDB connect
const connectString =
    "mongodb+srv://joevega3574_db_user:YSQdLOyyb54DtMig@cluster0.lgtsqcl.mongodb.net/?retryWrites=true&w=majority&appName=Reja";
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
