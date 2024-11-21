import express from "express";
import { listPosts } from "../controllers/postsController.js";


const routes = (app) => {
    // **Middleware to parse JSON request bodies**
    app.use(express.json());

    // **Endpoint to handle GET requests for all posts**
    app.get("/posts", listPosts);
}

export default routes;