import React, { useEffect, useState } from 'react';

const CurrencyConverter = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(0);

    useEffect(() => {
        const fetchCurrencies = async () => {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            const data = await response.json();
            setCurrencies([data.base, ...Object.keys(data.rates)]);
        };

        fetchCurrencies();
    }, []);

    const convertCurrency = async () => {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const conversionRate = data.rates[toCurrency];
        setResult((amount * conversionRate).toFixed(2));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
                <div className="flex justify-center space-x-4 mb-4">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="border border-gray-300 rounded p-2"
                    />
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="border border-gray-300 rounded p-2"
                    >
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <span className="text-xl font-semibold">to</span>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="border border-gray-300 rounded p-2"
                    >
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={convertCurrency}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Convert
                </button>
                <div className="mt-4 text-xl font-semibold">
                    {amount} {fromCurrency} = {result} {toCurrency}
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
