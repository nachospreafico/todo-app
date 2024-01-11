import { useTodoContext } from "../context/TodoContext";
import TaskItem from "./TaskItem";
import TaskListControls from "./TaskListControls";

const TaskList = () => {
  const { todoList, isMobile } = useTodoContext();

  return (
    <ul className="w-full bg-white border-[1px] shadow-xl rounded-[5px] mb-4 md:mb-6">
      {todoList.length === 0 ? (
        <div className=" w-full">
          <p className="text-[12px] px-6 py-[14px] md:py-5 md:text-[18px] text-center">
            Your list is empty.
          </p>
        </div>
      ) : (
        <>
          {todoList.map((task, index) => {
            return (
              <TaskItem
                text={task.text}
                index={index}
                key={task.id}
                id={task.id}
                completed={task.completed}
              />
            );
          })}
          <TaskListControls />
        </>
      )}
    </ul>
  );
};

export default TaskList;
