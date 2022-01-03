import React from "react";

const LazyChild1 = React.lazy(() => import("./ChildOneLazy"));
const LazyChild2 = React.lazy(() => import("./ChildTwoLazy"));

const Parentforlazy = () => {
  return (
    <div>
      <LazyChild1 />
      <LazyChild2 />
    </div>
  );
};

export default Parentforlazy;
