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
          <button
            onClick={() => {
              const newCounters = [...counters];
              newCounters[index] = newCounters[index] + 1;
              setCounters(newCounters);
            }}
          >
            +
          </button>
          <p>{counter}</p>
          <button
            onClick={() => {
              const newCounters = [...counters];
              newCounters[index] = newCounters[index] - 1;
              setCounters(newCounters);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              const newCounters = [...counters];
              newCounters[index] = newCounters[index] = 0;
              setCounters(newCounters);
            }}
          >
            Reset
          </button>
        </div>
      ))}
    </div>
  );
}

export default Counter;
