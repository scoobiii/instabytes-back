import express from "express";

const posts = [
    { 
        id: 1,
        descricao: "Uma foto", 
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante!",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Cachorro fazendo uma pose fofa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Um pôr do sol incrível",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Desenho artístico abstratos",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Comida deliciosa e colorida",
        imagem: "https://placecats.com/millie/300/150"
    }
];

//Initializing the express app
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//Get all the posts
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function getPostById(id) {
    return posts.findIndex((post) => {
        return post.id == Number(id);
    });
}

//Get post by id
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    const idx = getPostById(id);
   
    res.status(200).json(posts[idx]);
 });


