// src/Chat.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
    const [queryParameters] = useSearchParams();
    const username = queryParameters.get("name");
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log('username ', username);
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('chat message');
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('chat message', { user: username, text: message });
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex-1 p-6 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-4 text-center">Chat App - {username}</h1>
                <ul className="space-y-2">
                    {messages.map((msg, index) => (
                        <li key={index} className={`p-3 rounded shadow ${msg.user === username ? 'bg-blue-500 text-white self-end' : 'bg-white text-black self-start'}`}>
                            <span className="font-bold">{msg.user}: </span>
                            {msg.text}
                        </li>
                    ))}
                </ul>
            </div>
            <form onSubmit={sendMessage} className="flex p-4 bg-white shadow-md">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                    className="flex-1 border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chat;