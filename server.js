import express from "express";
import routes from "./src/routes/postsRoutes.js";

// **Initialize the Express Application**
const app = express();

app.use(express.static("uploads"));

routes(app);

// **Start the server on port 3000**
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

