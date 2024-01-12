import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodoContext } from "../context/TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [checked, setChecked] = useState(false);
  const { addTodo, darkMode } = useTodoContext();

  function handleAddTodo() {
    if (task.trim() !== "") {
      addTodo(task, uuidv4(), checked);
      setTask("");
      setChecked(false);
    } else {
      alert("Task can't be empty.");
    }
  }

  return (
    <div
      className={`w-full  ${
        darkMode ? "bg-[#25273D] border-[#25273D]" : "bg-white"
      } py-[14px] md:py-5 px-4 border-[1px] rounded-[5px]  flex flex-row items-center gap-2`}
    >
      <div
        onClick={() => setChecked(!checked)}
        className={`min-w-5 cursor-pointer min-h-5 md:min-w-6 md:min-h-6 border-[1px] rounded-full flex items-center justify-center ${
          checked && "bg-purple-400"
        }`}
      >
        {checked && <FontAwesomeIcon icon={faCheck} className="text-white" />}
      </div>
      <input
        type="text"
        placeholder="Create a new todo…"
        className={`flex  ${
          darkMode ? "text-[#C8CBE7]" : "text-[#393A4B]"
        } items-center bg-transparent w-full justify-center pl-2 text-[12px] md:text-[18px] font-normal`}
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
