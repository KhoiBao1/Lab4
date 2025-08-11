import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    'Learn React',
    'Do Lab Exercise',
    'Take a break'
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '40px',
    fontFamily: 'Arial',
  };

  const inputStyle = {
    padding: '10px',
    width: '250px',
    marginRight: '10px',
    fontSize: '16px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const listStyle = {
    marginTop: '20px',
    listStyle: 'none',
    padding: 0
  };

  return (
    <div style={containerStyle}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={inputStyle}
        placeholder="Enter new todo"
      />
      <button onClick={handleAdd} style={buttonStyle}>Add</button>

      <ul style={listStyle}>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
