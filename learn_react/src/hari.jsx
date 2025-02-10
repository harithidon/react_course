import React, { useState } from 'react';
import './TodoList.css'; // Assume you have a separate CSS file for styling
import './App.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim() === '') {
            alert('Please enter a valid task');
            return;
        }
        setTodos([...todos, { text: inputValue, completed: false }]);
        setInputValue('');
    };

    const handleToggleComplete = (index) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (

        <> <div className="input-group">

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a new task"
                className="todo-input" />
            <button onClick={handleAddTodo} className="add-button">Add</button>
            </div><ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <span onClick={() => handleToggleComplete(index)}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(index)} className="delete-button">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;

