import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("Click Get Time");
  const [runningClock, setRunningClock] = useState(false);
  const [interv, setInterv] = useState();

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  function stopTime() {
    if(runningClock) {
      clearInterval(interv);
      setRunningClock(false);
    } else {
      setInterv(setInterval(updateTime, 1000));
      setRunningClock(true);
    }
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={stopTime}>{runningClock ? 'Pause Time' : 'Get Time'}</button>
    </div>
  );
}

export default App;
