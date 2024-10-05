import React, { useState } from 'react';

const initialFlashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
  { question: "What is the boiling point of water?", answer: "100°C" },
];

function FlashCards() {
  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '' });

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  const handleAddFlashcard = (e) => {
    e.preventDefault();
    if (newFlashcard.question && newFlashcard.answer) {
      setFlashcards([...flashcards, newFlashcard]);
      setNewFlashcard({ question: '', answer: '' });
    }
  };

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Flashcard App</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">{currentFlashcard.question}</h2>
          {showAnswer && <p className="mt-2 text-lg">{currentFlashcard.answer}</p>}
          <button 
            onClick={() => setShowAnswer(!showAnswer)} 
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
        </div>

        <div className="flex justify-between">
          <button onClick={handlePrev} className="bg-gray-300 px-4 py-2 rounded">Previous</button>
          <button onClick={handleNext} className="bg-gray-300 px-4 py-2 rounded">Next</button>
        </div>

        <form onSubmit={handleAddFlashcard} className="mt-6">
          <h3 className="text-lg font-semibold">Add New Flashcard</h3>
          <input
            type="text"
            placeholder="Question"
            value={newFlashcard.question}
            onChange={(e) => setNewFlashcard({ ...newFlashcard, question: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <input
            type="text"
            placeholder="Answer"
            value={newFlashcard.answer}
            onChange={(e) => setNewFlashcard({ ...newFlashcard, answer: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">Add Flashcard</button>
        </form>
      </div>
    </div>
  );
}

export default FlashCards;
