import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("TIME");

  function getTime() {
    var now = new Date().toLocaleTimeString();
    //Print time to console log
    // console.log(now);
    setTime(now);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
