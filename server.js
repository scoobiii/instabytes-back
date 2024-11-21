import express from "express";
import routes from "./src/routes/postsRoutes.js";

// **Initialize the Express Application**
const app = express();

routes(app);

// **Start the server on port 3000**
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

