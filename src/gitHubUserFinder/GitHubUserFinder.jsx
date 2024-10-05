import React, { useState } from 'react';
import axios from 'axios';

function GitHubUserFiner() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            setError(''); // Clear previous errors
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUserData(response.data);
        } catch (err) {
            setError('User not found! Please try again.');
            setUserData(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Finder</h1>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={handleSearch}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                    Search
                </button>

                {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

                {userData && (
                    <div className="mt-6 text-center">
                        <img
                            src={userData.avatar_url}
                            alt={userData.login}
                            className="w-24 h-24 rounded-full mx-auto"
                        />
                        <h2 className="text-xl font-bold mt-4">{userData.name}</h2>
                        <p className="text-gray-600">@{userData.login}</p>
                        <p className="mt-2 text-gray-800">
                            Public Repos: <span className="font-bold">{userData.public_repos}</span>
                        </p>
                        <a
                            href={userData.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-blue-500 hover:underline"
                        >
                            View Profile
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GitHubUserFiner;
