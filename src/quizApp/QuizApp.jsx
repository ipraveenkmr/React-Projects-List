import React, { useState } from 'react';

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        answer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars',
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        answer: 'Pacific Ocean',
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Mark Twain', 'Jane Austen', 'William Shakespeare', 'Charles Dickens'],
        answer: 'William Shakespeare',
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Pb', 'Fe'],
        answer: 'Au',
    },
];

const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerClick = (option) => {
        setUserAnswers((prev) => [...prev, option]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setShowResults(false);
    };

    const correctAnswersCount = userAnswers.filter((answer, index) => answer === questions[index].answer).length;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                {showResults ? (
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Results</h1>
                        <p className="text-lg">
                            You answered {correctAnswersCount} out of {questions.length} questions correctly!
                        </p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                            onClick={handleRestart}
                        >
                            Restart Quiz
                        </button>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-xl font-bold mb-4">
                            Question {currentQuestionIndex + 1} of {questions.length}
                        </h1>
                        <h2 className="mb-4">{questions[currentQuestionIndex].question}</h2>
                        <div className="flex flex-col space-y-2">
                            {questions[currentQuestionIndex].options.map((option) => (
                                <button
                                    key={option}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleAnswerClick(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizApp;
