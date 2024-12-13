

const express = require("express");
// console.log("Express module loaded");

const app = express();
// console.log("Express app initialized");

 app.get("/", (req, res) => {     console.log("GET request received at '/'");
    res.send("Server is running!");
 });

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
    // process.exit(1)
});
