import React, { useState, memo, useCallback } from "react";

// чему будет равен count после 1 клика
// выведется ли в консоль Count-render после клика / если да, то как этого избежать

export const Count = ({ onClick }) => {
  console.log("Count-render");
  return <div onClick={onClick}>Count component</div>;
};
const MemoizedCount = memo((onClick) => Count(onClick));

export const RefactorCounter = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    console.log("Onclick");
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const memoizedOnClick = useCallback(() => onClick(), []);
  return (
    <div>
      <h1>App1</h1>
      <div>{count}</div>
      <button onClick={memoizedOnClick}>increment</button>

      <MemoizedCount onClick={memoizedOnClick} />
      {/* <Count1 onClick={onClick} /> */}
    </div>
  );
};
