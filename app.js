const express = require("express"); // Step-1: import express library | https://expressjs.com/
const app = express(); // Step-2: Creating app

//Controlles
const userControllers = require('./src/controllers/userControllers')
const postControllers = require('./src/controllers/postControllers')
const todoControllers = require('./src/controllers/todoControllers')
  
// Router Start
app.get('/posts', (req, res) => {
  var userID = req.query.user
  var posts = userID ? postControllers.getPostByUserID(userID) : postControllers.getAllPost();
  res.send(posts)
})
  
app.get('/posts/:postID', (req, res) => {
  var post = postControllers.getPostById(req.params.postID);
  res.send(post)
})
  
app.get('/users', (req, res) => {
  var users = userControllers.getAllUser();
  res.send(users)
})
  
app.get('/users/:userID', (req, res) => {
  var user = userControllers.getUserById(req.params.userID)
  res.send(user)
})

app.get('/todos', (req, res) => {
  var userID = req.query.user
  var todos = userID ? todoControllers.getTodoByUserID(userID) : todoControllers.getAllTodo();
  res.send(todos)
})

app.get('/todos/:todoID', (req, res) => {
  var todos = todoControllers.getTodoById(req.params.todoID);
  res.send(todos)
})
  
// Router Finish

const PORT = 3000; // Step-3: Select PORT

app.listen(PORT, () => {
    console.log(`App is running on the ${PORT} port.`); // Step-4: Listen server
}); 