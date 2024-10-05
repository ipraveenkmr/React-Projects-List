import React, { useState } from 'react';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const [expense, setExpense] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddExpense = (e) => {
        e.preventDefault();
        if (!expense || !amount) return;

        setExpenses([...expenses, { id: Date.now(), expense, amount: parseFloat(amount) }]);
        setExpense('');
        setAmount('');
    };

    const handleDeleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
                <form onSubmit={handleAddExpense} className="mb-4">
                    <input
                        type="text"
                        value={expense}
                        onChange={(e) => setExpense(e.target.value)}
                        placeholder="Expense Name"
                        className="border border-gray-300 rounded p-2 w-full mb-2"
                    />
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount"
                        className="border border-gray-300 rounded p-2 w-full mb-4"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
                        Add Expense
                    </button>
                </form>
                <h2 className="text-xl font-semibold mb-2">Expenses:</h2>
                <ul className="space-y-2 mb-4">
                    {expenses.map(({ id, expense, amount }) => (
                        <li key={id} className="flex justify-between items-center">
                            <span>{expense}</span>
                            <span>₹{amount.toFixed(2)}</span>
                            <button
                                onClick={() => handleDeleteExpense(id)}
                                className="text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="font-bold">Total: ₹{totalExpenses.toFixed(2)}</div>
            </div>
        </div>
    );
};

export default ExpenseTracker;
