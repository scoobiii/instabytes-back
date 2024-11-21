import dbConnection from "../config/dbConfig.js";

// **Connect to the MongoDB Database Cluster**
const connection = await dbConnection(process.env.STRING_CONNECTION);

// **Function to retrieve all posts from the MongoDB database**
export async function getAllPosts() {
    // **Select the 'imersao-instabytes' database**
    const db = connection.db("imersao-instabytes");

    // **Select the 'posts' collection within the database**
    const collection = db.collection("posts");

    // **Find all documents in the 'posts' collection and return them as an array**
    return collection.find().toArray();
};