import { useState } from "react";

// что произойдет при клике на Click to reverse?
// что произойдет при клике на Count+1?
// Задача - Найти ошибки в коде

let count = 1;

export default function Reverse() {
  const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const [count, setCount] = useState(1);

  function func(prev) {
    let newList = prev;
    console.log(newList);
    console.log(newList.reverse())
    return newList.reverse();
  }
  const handleReverseClick = () => {
    setList((prev) => {
     
      return [...prev].reverse()
    });
  };

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>I have a bug, click reverse list</h1>
      <h2>Count: {count}</h2>
      <ul>
        {list.map((item) => {
          return <Item key={item?.id} item={item} />;
        })}
      </ul>
      <button onClick={handleReverseClick}>Click to reverse</button>
      <button onClick={handleAdd}>Count+1</button>
    </div>
  );
}

const Item = ({ item }) => {
  return <li>{item.id}</li>;
};
