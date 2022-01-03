import React from "react";
import { debounce, cloneDeep } from "lodash";

const Childonelazy = () => {
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
    return cloneDeep(obj1);
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

export default Childonelazy;
