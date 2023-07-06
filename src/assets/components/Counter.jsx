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
              //   setCounters(counters[0] + 1);
              const newCounters = [...counters];
              newCounters[index] = newCounters[index] + 1;
              setCounters(newCounters);

              console.log("coucou");
            }}
          >
            +
          </button>
          <p>{counter}</p>
          <p>{index}</p>
          <button>-</button>
          <button>Reset</button>
        </div>
      ))}
    </div>
  );
}

export default Counter;
