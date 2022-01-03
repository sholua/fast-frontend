import React, { useCallback, useEffect } from "react";
import useThrottle from "../hooks/useThrottle";

const Throttling = () => {
  const callback = useCallback(() => console.log("mouse movement..."), []);
  const throttledMouseMove = useThrottle(callback, 1000);

  useEffect(() => {
    document.addEventListener("mousemove", throttledMouseMove);

    return () => document.removeEventListener("mousemove", throttledMouseMove);
  }, [throttledMouseMove]);

  return <div>Mouse movement...</div>;
};

export default Throttling;
