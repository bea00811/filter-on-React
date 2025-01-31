import { useState} from "react";

const ToDoList = () => {
  const [task, setTask] = useState({});
  const [taskArray, setTaskArray] = useState([]);

  const tasksLoader = () => {
    setTaskArray([task, ...taskArray]);
    setTask({ text: "" });
  };

  const setComplete = (id) => {
   const newTaskArray = taskArray.map((item) => {
    console.log(item)
    console.log(id)
      return item.id === id ? { text: item?.text, status: "complete", id: Math.random() } : item;
    });
    console.log(newTaskArray)
    setTaskArray(newTaskArray)
   };

  return (
    <div>
      <input value={task?.text || ""} onChange={(e) => setTask({ text: e.target.value, status: "notcomplete", id: Math.random() })} />
      <button onClick={() => tasksLoader()}>Save Task1</button>
      {taskArray.map((item, id) => (
        <div className={item?.status === "complete" ? "complete" : "notcomplete"} style={item?.status === "complete" ? { textDecoration: "line-through #000" } : {}} key={item.id}>
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
