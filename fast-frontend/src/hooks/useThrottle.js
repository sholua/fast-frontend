import { useCallback, useRef } from "react";

export default function useThrottle(callback, delay) {
  const isThrottled = useRef(null);

  const throttledCallcack = useCallback(
    (...args) => {
      if (isThrottled.current) {
        return;
      }

      callback(...args);
      isThrottled.current = true;
      setTimeout(() => (isThrottled.current = false), delay);
    },
    [callback, delay]
  );

  return throttledCallcack;
}
