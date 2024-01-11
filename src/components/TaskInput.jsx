import { useEffect, useState, useId } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodoContext } from "../context/TodoContext";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useTodoContext();

  function handleAddTodo() {
    if (task.trim() !== "") {
      addTodo(task, uuidv4(), false);
      setTask("");
    } else {
      alert("Task can't be empty.");
    }
  }

  return (
    <div className="w-full bg-white py-[14px] md:py-5 px-4 border-[1px] rounded-[5px]  flex flex-row items-center gap-2">
      <div className="min-w-5 min-h-5 md:min-w-6 md:min-h-6 border-[1px] rounded-full"></div>
      <input
        type="text"
        placeholder="Create a new todo…"
        className="flex text-[#393A4B] items-center w-full justify-center pl-2 text-[12px] md:text-[18px] font-normal"
        id="task-input"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
        value={task}
      ></input>
    </div>
  );
};

export default TaskInput;
