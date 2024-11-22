import "dotenv/config";

import { ObjectId } from "mongodb";
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

// **Function to create a new post in the MongoDB database**
export async function createPost(newPost){
   // **Select the 'imersao-instabytes' database**
   const db = connection.db("imersao-instabytes");

   // **Select the 'posts' collection within the database**
   const collection = db.collection("posts");
   
   // **Insert the new post into the 'posts' collection**
    return collection.insertOne(newPost);
};

export async function updatePost(id, updPost){
    const objID = ObjectId.createFromHexString(id);

    // **Select the 'imersao-instabytes' database**
    const db = connection.db("imersao-instabytes");

    // **Select the 'posts' collection within the database**
    const collection = db.collection("posts");

    // **Update the post with the specified id in the 'posts' collection**
    return collection.updateOne({_id: new ObjectId(objID)}, {$set: updPost});
}

