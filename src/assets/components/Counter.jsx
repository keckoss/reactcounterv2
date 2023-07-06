import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            const newCounter = [...counter];
            newCounter.push(counter);
            setCounter(newCounter);
          }}
        >
          ADD COUNTER
        </button>

        <div>
          <button onClick={() => setCounter(counter + 1)}>PLUS</button>
          <p>{counter}</p>
          <button onClick={() => setCounter(counter - 1)}>MOINS</button>
          <button onClick={() => setCounter(0)}>RESET</button>
        </div>
      </div>
    </>
  );
}
export default Counter;
