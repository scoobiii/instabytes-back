import { getAllPosts } from "../models/postsModel.js";


export async function listPosts(req, res){
    // **Fetch all posts using the getAllPosts function**
    const posts = await getAllPosts();

    // **Send the fetched posts as a JSON response with a 200 OK status code**
    res.status(200).json(posts);
};