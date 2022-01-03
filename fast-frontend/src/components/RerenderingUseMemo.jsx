import React, { useMemo, useState } from "react";

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

const getList = () => [1, 2, 3, 4];

const RerenderingUseMemo = () => {
  let [count, setCount] = useState(0);
  const list = useMemo(() => getList(), []); // list from external function

  const handleIncrement = () => setCount(count + 1);

  console.log("Parent component");

  return (
    <div>
      <h3>Parent component useMemo hook</h3>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <ChildComponent list={list} />
    </div>
  );
};

export default RerenderingUseMemo;
