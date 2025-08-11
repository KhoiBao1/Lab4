import React, { useState } from 'react';

function FilterableTodoList() {
  const [todos, setTodos] = useState([
    'Learn React',
    'Do Lab Exercise',
    'Take a break',
    'Play video games',
    'Eat breakfast'
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAdd = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const filteredTodos = todos.filter(todo =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', marginTop: '40px' }}>
      <h2>Filterable Todo List</h2>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', width: '250px', marginBottom: '10px' }}
      />
      <br />

      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{ padding: '8px', width: '250px', marginRight: '10px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 20px' }}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo, index) => <li key={index}>{todo}</li>)
        ) : (
          <li style={{ color: 'gray' }}>No matching tasks</li>
        )}
      </ul>
    </div>
  );
}

export default FilterableTodoList;
