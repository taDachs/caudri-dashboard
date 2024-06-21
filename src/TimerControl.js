import React, { useState } from 'react';

function TimerControl() {
  const [rows, setRows] = useState([]);
  const [timer, setTimer] = useState(0);

  const updateRow = (id, value) => {
    setRows(rows.map(row => row.id === id ? { ...row, value } : row));
  };

  const startTimer = () => {
    fetch('http://localhost:5000/timer/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ timer }),
    });
  };

  const stopTimer = () => {
    fetch('http://localhost:5000/timer/stop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };


  const setTimerValue = () => {
    const value = Number.parseInt(timer)
    if (value === NaN) {
      return;
    }
    fetch('http://localhost:5000/timer/set', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ milliseconds: value * 1000 }),
    });
  };

  return (
    <div>
      <button onClick={() => startTimer()}>Start Timer</button>
      <button onClick={() => stopTimer()}>Stop Timer</button>
      <input type="number" value={timer} onChange={e => setTimer(Number.parseInt(e.target.value))} />
      <button onClick={() => setTimerValue()}>Set Timer (Seconds)</button>
    </div>
  );
}

export default TimerControl;
