import express from "express";
import bodyParser from "body-parser";
import path from "path"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const data = {
    toDoLists: ["Clean my room."],
    };


app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index.ejs", data);
    res.redirect("/");
});

app.post("/submit", (req,res) => {
    const NewTodo = req.body.content;
    data.toDoLists.push(NewTodo);
    res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
    const deleteContent = req.params.id;
    toDoLists = toDoLists.filter((value) => value != deleteContent);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on ${port}. `);
});