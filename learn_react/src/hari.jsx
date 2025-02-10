import React, { useState, useEffect } from 'react'; // Import necessary hooks from React library
import './TodoList.css'; // Assume you have a separate CSS file for styling

function TodoList() {   // Function component
    const [todos, setTodos] = useState([]); // State variable
    const [inputValue, setInputValue] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleAddTodo = () => { // Function to add a new task
        if (inputValue.trim() === '') { // Check if the input is empty
            alert('Please enter a valid task'); // Show an alert
            return; // Exit the function
        }
        setTodos([...todos, { text: inputValue, completed: false, time: new Date().toLocaleTimeString() }]); // Add a new task to the list and time of task added
        setInputValue(''); // Clear the input field
    };

    const handleToggleComplete = (index) => { // Function to toggle the status of a task
        const newTodos = todos.map((todo, i) => // Create a new list of tasks
            i === index ? { ...todo, completed: !todo.completed } : todo // Toggle the status of the task
        );
        setTodos(newTodos); // Update the state variable
    };

    const handleDeleteTodo = (index) => { // Function to delete a task
        const newTodos = todos.filter((_, i) => i !== index); // Create a new list of tasks
        setTodos(newTodos); // Update the state variable
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <>
            <div className="header">
                <div className="current-time">{currentTime}</div>
            </div>
            <center> <div className="input-group" style={{ width: '50%' }}> {/* Input group to add a new task */}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress} //when value inputed then enter given value to inputValue and handle Enter key press
                    placeholder="Enter a new task"
                    className="todo-input" /> {/* Input field to add a new task */}
                <button onClick={handleAddTodo} className="add-button">Add</button> {/* Button to add a new task */}
            </div>
            </center>
            <ul className="todo-list"> {/* List of tasks */}
                {todos.map((todo, index) => ( // Loop through the tasks
                    <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}> {/* Task item */}
                        <span onClick={() => handleToggleComplete(index)}> {/* Task text */}
                            {todo.text}
                        </span>
                        <span className="task-time">{todo.time}</span> {/* Task added time */}
                        <button onClick={() => handleDeleteTodo(index)} className="delete-button"> {/* Button to delete a task */}
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList; // Export the component

