import cors from "cors";
import multer from "multer";
import express from "express";
import { listPosts, postPost, updateNewPost, uploadImage } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads" , storage});

const routes = (app) => {
    // **Middleware to parse JSON request bodies**
    app.use(express.json());

    // **Middleware to parse URL-encoded request bodies**
    app.use(cors(corsOptions));

    // **Endpoint to handle GET requests for all posts**
    app.get("/posts", listPosts);
    
    // **Endpoint to handle POST requests for creating a new post**
    app.post("/posts", postPost);

    // **Endpoint to handle POST requests for uploading an image** 
    app.post("/upload", upload.single("image"), uploadImage);

    // **Endpoint to handle PUT requests for updating a post**
    app.put("/upload/:id", updateNewPost);
};

export default routes;