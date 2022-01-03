import React, { useCallback, useState } from "react";

const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("Child component");

  return (
    <div>
      <h3>Child component</h3>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
});

const RerenderingUseCallback = () => {
  let [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => setCount((prev) => prev + 1), []);

  console.log("Parent component");

  return (
    <div>
      <h3>Parent component useCallback hook</h3>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
};

export default RerenderingUseCallback;
