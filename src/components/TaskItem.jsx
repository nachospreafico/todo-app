import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import Cross from "./../assets/icon-cross.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ text, id, completed }) => {
  const { removeTask, toggleCompleted, darkMode } = useTodoContext();

  return (
    <li
      className={`${
        darkMode ? "border-[#393A4B]" : ""
      } border-b-[1px] w-full flex flex-row items-center py-[14px] md:py-5 px-5 gap-3`}
    >
      <div
        onClick={() => toggleCompleted(id)}
        className={`min-w-5 cursor-pointer min-h-5 md:min-w-6 md:min-h-6 border-[1px] rounded-full flex items-center justify-center ${
          completed && "bg-purple-400"
        }`}
      >
        {completed && <FontAwesomeIcon icon={faCheck} className="text-white" />}
      </div>
      <p
        className={`w-full text-[12px] md:text-[18px] duration-200 ${
          darkMode
            ? completed
              ? "text-[#4D5067] line-through"
              : "text-[#C8CBE7]"
            : completed
            ? "text-[#D1D2DA] line-through"
            : "text-[#494C6B]"
        }`}
      >
        {text}
      </p>
      <img
        src={Cross}
        onClick={() => removeTask(id)}
        alt="close icon"
        className="w-3 h-3 cursor-pointer"
      />
    </li>
  );
};

export default TaskItem;
