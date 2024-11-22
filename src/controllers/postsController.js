import { createPost, getAllPosts } from "../models/postsModel.js";
import fs from "fs";

// Function to list all existing posts
export async function listPosts(req, res) {
  // Fetch all posts from the database
  const posts = await getAllPosts();

  // Send the fetched posts as a JSON response
  res.status(200).json(posts);
}

// Function to create a new post
export async function postPost(req, res) {
  // Extract the new post data from the request body
  const newPost = req.body;

  try {
    // Create a new post in the database
    const post = await createPost(newPost);

    // Send the newly created post as a JSON response
    res.status(200).json(post);
  } catch (err) {
    // Log the error to the console for debugging
    console.error(err.message);

    // Send an error response with a 500 status code
    res.status(500).json({ message: "Error creating post" });
  }
}

// Function to upload an image and create a new post
export async function uploadImage(req, res) {
  // Create a new post object with the image information
  const newPost = {
    descricao: "", // Empty description for now
    imgUrl: req.file.originalname, // Original filename of the uploaded image
    alt: "" // Empty alt text for now
  };

  try {
    // Create a new post in the database
    const post = await createPost(newPost);

    // Construct the new filename for the image, using the post's ID
    const updatedImage = `uploads/${post.insertedId}.png`;

    // Rename the uploaded file to the new filename
    fs.renameSync(req.file.path, updatedImage);

    // Send the newly created post as a JSON response
    res.status(200).json(post);
  } catch (err) {
    // Log the error to the console for debugging
    console.error(err.message);

    // Send an error response with a 500 status code
    res.status(500).json({ message: "Error uploading image" });
  }
}