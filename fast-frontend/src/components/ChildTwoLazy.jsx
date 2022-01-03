import React from "react";
import { debounce, throttle } from "lodash";

const Childtwolazy = () => {
  const obj1 = { name: "test" };
  const obj2 = { name: "test" };
  const obj3 = { name: "test" };
  const obj4 = { name: "test" };
  const obj5 = { name: "test" };
  const obj6 = { name: "test" };

  const function1 = () => {
    debounce(() => {}, 200);
  };
  function1();

  const function2 = () => {
    return throttle(() => console.log("test"), 500);
  };
  function2();

  return (
    <div>
      {JSON.stringify(obj1)}
      {JSON.stringify(obj2)}
      {JSON.stringify(obj3)}
      {JSON.stringify(obj4)}
      {JSON.stringify(obj5)}
      {JSON.stringify(obj6)}
    </div>
  );
};

export default Childtwolazy;
