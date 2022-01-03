import React, { useState } from "react";

const ChildComponent = React.memo(({ list }) => {
  console.log("Child component");

  return (
    <div>
      <h3>Child component</h3>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

const RerenderingusememoState = () => {
  let [count, setCount] = useState(0);
  let [list, setList] = useState([1, 2, 3, 4]); // list in State

  const handleIncrement = () => setCount(count + 1);

  console.log("Parent component");

  return (
    <div>
      <h3>Parent component</h3>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <ChildComponent list={list} />
    </div>
  );
};

export default RerenderingusememoState;
