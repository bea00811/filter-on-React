import { useState, useEffect } from "react";

/** 
Написать таймер который запускается/останавливается при клике на кнопку
если таймер запущен, то каждую секунду он увеличивается на 1
*/

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);
  const time1 = new Date().getSeconds();
  // console.log(time1);

  useEffect(() => {
    if (run) {
      setCount(count)
    }else{
      const timer = setTimeout(() => setCount(count + 1), 1000);
      return () => clearTimeout(timer);
    }

  }, [count, run]);
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setRun(()=>!run)}>Toggle timer</button>
    </div>
  );
};

export default Counter;
