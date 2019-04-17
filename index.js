const express = require('express');
const app = express();
const path = require("path");

app.use("/public", express.static("./public"));
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname + "/index.html"));
    });
}

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/views/index.html"));
});

app.get("/signedin", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/views/signedin.html"));
});

app.listen(port, () => console.log(`Server at ${port}`));