import React, { useState, useEffect } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    // Load tasks from localStorage when the component mounts
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    // Save tasks to localStorage whenever the tasks array changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (input.trim()) {
            const newTask = {
                id: Date.now(),
                text: input,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setInput('');
        }
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <span onClick={() => toggleComplete(task.id)}>
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
