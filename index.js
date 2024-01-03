import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
// let post_title = ``;
// let post_content = ``;
// let post_date = ``;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// const postGenerator = (req, res, next) => {
//   post_title = `${req.body.blog_post_title}`;
//   post_content= `${req.body.blog_post_content}`;
//   post_date= `${req.body.blog_post_date}`;
//   next();
// }

// app.use(postGenerator);

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.get("/posts", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {  
  let postTitle = `${req.body.blog_post_title}`;
  let postContent= `${req.body.blog_post_content}`;
  let postDate= `${req.body.blog_post_date}`;

  console.log(postTitle);
  console.log(postContent);
  console.log(postDate);

  res.render("index.ejs", { 
    title: postTitle, 
    content: postContent, 
    date: postDate, 
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});