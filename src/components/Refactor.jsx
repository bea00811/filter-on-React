// зарефакторить код

import React, { useState, useMemo } from "react";

const fetchNumber = () => Promise.resolve(Math.random()); // имитация бэкенд запроса

const heavyFunc = () => {
  // имитация тяжелой функции
  console.log("heavy func rendered");
  return Math.random();
};

const arr = [1, 2, 3, 4];
const Refactor = () => {
  const memoizedHeavyFunc = useMemo(heavyFunc, []);
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();
  const [data, setData] = useState(memoizedHeavyFunc);

  const scrollFunc = () => {
      setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    (async function func() {
      try{
        const number = await fetchNumber();
        console.log(number);
        setNumber(number);
      }
      catch(e){
       throw new Error(e)
      }
  
    })()

    // func();
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <div>
      <div>{number}</div>
      <div>{data}</div>
      <div>{scroll}</div>

      {arr.map((el) => (
        <li key={Math.random()}>{el}</li>
      ))}
    </div>
  );
};

export default Refactor;
