const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Assignment', { useNewUrlParser: true, useUnifiedTopology: true });

// Mongoose Model
const todoSchema = new mongoose.Schema({
  text: String
});

const Todo = mongoose.model('Todo', todoSchema);

// API Endpoints

// Fetch all todos
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add a new todo
app.post('/todos', async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text
  });
  await newTodo.save();
  res.json(newTodo);
});

// Delete a todo by ID
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Todo deleted' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
