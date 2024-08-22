import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Fetch all to-do items when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to fetch all to-do items from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Function to add a new to-do item by sending a POST request
  const addTodo = async () => {
    if (!newTodo) return;
    await axios.post('http://localhost:5000/todos', { text: newTodo });
    setNewTodo('');  // Clear the input field after adding the new to-do
    fetchTodos();    // Refresh the list of to-dos
  };

  // Function to delete a to-do item by sending a DELETE request
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchTodos();    // Refresh the list of to-dos after deletion
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do App</h1>

      {/* Input field to add a new to-do item */}
      <div className="input-container">
        <input
          className="todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new to-do"
        />
        {/* Button to submit the new to-do item */}
        <button className="add-button" onClick={addTodo}>Add</button>
      </div>

      {/* Display the list of to-do items */}
      <ul className="todo-list">
        {todos.map(todo => (
          <li className="todo-item" key={todo._id}>
            {todo.text}
            <button className="delete-button" onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
