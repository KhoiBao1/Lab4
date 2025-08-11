import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>Stopwatch</h2>
      <h1>{formatTime(seconds)}</h1>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleStart} style={{ padding: '8px 16px', marginRight: '10px' }}>Start</button>
        <button onClick={handlePause} style={{ padding: '8px 16px', marginRight: '10px' }}>Pause</button>
        <button onClick={handleReset} style={{ padding: '8px 16px' }}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
