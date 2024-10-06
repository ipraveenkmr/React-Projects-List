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
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-700">To-Do List</h1>
            <div className="input-section mb-6 flex space-x-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a new task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>
            <ul className="task-list w-full max-w-md">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`flex justify-between items-center p-4 mb-3 bg-white rounded-lg shadow-sm transition duration-200 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                            }`}
                    >
                        <span
                            onClick={() => toggleComplete(task.id)}
                            className="cursor-pointer"
                        >
                            {task.text}
                        </span>
                        <button
                            className="text-red-500 hover:text-red-600 font-semibold focus:outline-none"
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
