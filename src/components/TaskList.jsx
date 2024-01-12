import { useTodoContext } from "../context/TodoContext";
import TaskItem from "./TaskItem";
import TaskListControls from "./TaskListControls";

const TaskList = () => {
  const { todoList, showCompleted, showActive, darkMode } = useTodoContext();

  return (
    <ul
      className={`w-full ${
        darkMode ? "bg-[#25273D] border-[#25273D]" : "bg-white"
      } border-[1px] shadow-xl rounded-[5px] mb-4 md:mb-6`}
    >
      {todoList.length === 0 ? (
        <div className=" w-full">
          <p
            className={`${
              darkMode ? "text-[#C8CBE7]" : "text-[#494C6B]"
            } text-[12px] px-6 py-[14px] md:py-5 md:text-[18px] text-center`}
          >
            {showCompleted
              ? "You have no completed tasks."
              : showActive
              ? "You have no active tasks."
              : "Your list is empty"}
          </p>
        </div>
      ) : (
        <>
          {todoList.map((task, index) => (
            <TaskItem
              text={task.text}
              index={index}
              key={task.id}
              id={task.id}
              completed={task.completed}
            />
          ))}
        </>
      )}
      <TaskListControls />
    </ul>
  );
};

export default TaskList;
