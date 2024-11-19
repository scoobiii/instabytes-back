import express from "express";

//Initializing the express app
const app = express();
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/api", (req, res) => {
    res.status(200).send("Initial route");
});