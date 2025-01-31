import { useState, useEffect } from "react";

// реализовать хук useDebounce
/**
 *  debounce(fn, ms) – это обёртка, которая откладывает вызовы fn, пока не пройдёт ms миллисекунд бездействия
 *  а затем вызывает f один раз с последними аргументами
 */

export function useDebounce(value, delay) {
    const [debouncedVal, setDebouncedVal] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
          setDebouncedVal(value);
          console.log(debouncedVal);
        }, delay);
        return () => clearTimeout(timer);
      }, [value]);

      return debouncedVal

}

export default function Debounce() {
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 500);



  return (
    <form>
      <input placeholder="value" onChange={(e) => setValue(e.target.value)} value={value} />

      <div>deb: {debouncedValue}</div>
      {/* <div>deb: {debouncedVal}</div> */}
    </form>
  );
}
