import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Debounce from "./components/Debounce";
import Throttling from "./components/Throttling";
import LazyParent from "./components/LazyParent";
import RerenderingReactMemo from "./components/RerenderingReactMemo";
import RerenderingusememoState from "./components/RerenderingReactMemoState";
import RerenderingUseMemo from "./components/RerenderingUseMemo";

ReactDOM.render(
  <React.StrictMode>
    <Debounce />
    <Throttling />
    <Suspense fallback={<div>Loading...</div>}>
      <LazyParent />
    </Suspense>
    <RerenderingReactMemo />
    <RerenderingusememoState />
    <RerenderingUseMemo />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
