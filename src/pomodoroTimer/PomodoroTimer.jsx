import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes
  const [workDuration, setWorkDuration] = useState(1500); // 25 minutes
  const [breakDuration, setBreakDuration] = useState(300); // 5 minutes
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? workDuration : breakDuration);
      new Audio('https://www.soundjay.com/button/beep-07.wav').play();
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft, isBreak, workDuration, breakDuration]);

  const handleStartPause = () => {
    setIsActive((prev) => !prev);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(workDuration);
    setIsBreak(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">{isBreak ? 'Break Time!' : 'Work Time!'}</h1>
        <div className="text-6xl font-semibold mb-4">{formatTime(timeLeft)}</div>
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 ${isActive ? 'bg-red-500' : ''}`}
          onClick={handleStartPause}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={handleReset}>
          Reset
        </button>
        <div className="mt-4">
          <p>Work Duration: {formatTime(workDuration)}</p>
          <p>Break Duration: {formatTime(breakDuration)}</p>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
