import React from "react";

const LazyChild1 = React.lazy(() => import("./LazyChildOne"));
const LazyChild2 = React.lazy(() => import("./LazyChildTwo"));

const Parentforlazy = () => {
  return (
    <div>
      <LazyChild1 />
      <LazyChild2 />
    </div>
  );
};

export default Parentforlazy;
