import React, { useState } from "react";

function Counter() {
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  return (
    <div>
      <button onClick={addCounter}>Add Counter</button>
      {counters.map((counter, index) => (
        <div key={index}>
          <button>+</button>
          <p>{counter}</p>
          <button>-</button>
          <button>Reset</button>
        </div>
      ))}
    </div>
  );
}

export default Counter;
