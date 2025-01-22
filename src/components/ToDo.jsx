import { useState, useRef } from "react";

const ToDoList = () => {
  //   const [task, setTask] = useState('');
  const [task, setTask] = useState({});
  const [taskArray, setTaskArray] = useState([]);

  const handler = (e) => {
    setTask({ text: e.target.value, status: "notcomplete", id: Math.random() });
    console.log(task);
  };

  const clearInput = () => {
    refInput.current.value = "";
  };

  const tasksLoader = () => {
    setTaskArray([task, ...taskArray]);
    console.log(taskArray);
    clearInput();
  };

  const setComplete = (id) => {
    console.log(id);
    const filteredTask = taskArray.filter((item) => item?.id === id);
    filteredTask[0].status = "complete";
    const newArrayNoTask = taskArray.filter((item) => item?.id !== id);
    setTaskArray([...newArrayNoTask, filteredTask[0] ]);
    console.log(taskArray);
  };

  const refInput = useRef();

  return (
    <div>
      <input ref={refInput} onChange={(e) => handler(e)} />
      <button onClick={() => tasksLoader()}>Save Task1</button>
      {taskArray.map((item, id) => (
        <div className={item?.status === "complete" ? "complete" : "notcomplete"} style={ item?.status === "complete"? {textDecoration: 'line-through #000'} : {}} key={item.id}>
          {item?.text}: id: {item?.id}
          <button data-id={id} onClick={() => setComplete(item?.id)}>
            Завершить задачу
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
