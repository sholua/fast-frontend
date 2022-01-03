import React, { useState } from "react";

const ChildComponent = React.memo(() => {
  console.log("Child component");

  return (
    <div>
      <h3>Child component</h3>
    </div>
  );
});

const Rerenderingusememo = () => {
  let [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  console.log("Parent component");

  return (
    <div>
      <h3>Parent component React Memo</h3>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <ChildComponent />
    </div>
  );
};

export default Rerenderingusememo;
