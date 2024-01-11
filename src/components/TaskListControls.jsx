import { useTodoContext } from "../context/TodoContext";

const TaskListControls = () => {
  const { isMobile, todoList, clearCompleted } = useTodoContext();
  const tasksLeft = todoList.filter((elem) => !elem.completed).length;

  return (
    <div className="py-[14px] md:py-5 px-5 flex flex-row justify-between items-center relative">
      {isMobile ? (
        <>
          <p className="text-[12px] md:text-[18px] text-[#9495A5]">
            {tasksLeft} items left
          </p>
          <button
            onClick={clearCompleted}
            className="text-[12px] md:text-[18px] text-[#9495A5]"
          >
            Clear Completed
          </button>
          <div className="absolute w-full py-[14px] md:py-5 px-5 flex flex-row justify-center bottom-[-70px] left-0 rounded-[5px] bg-white shadow-xl items-center">
            <div className="flex flex-row gap-2">
              <p className="text-[#9495A5] font-bold text-[14px] cursor-pointer">
                All
              </p>
              <p className="text-[#9495A5] font-bold text-[14px] cursor-pointer">
                Active
              </p>
              <p className="text-[#9495A5] font-bold text-[14px] cursor-pointer">
                Completed
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>{tasksLeft} items left</p>
          <div className="flex flex-row gap-5">
            <p className="text-[#9495A5] font-bold text-[14px] cursor-pointer">
              All
            </p>
            <p className="text-[#9495A5] font-bold text-[14px] cursor-pointer">
              Active
            </p>
            <p className="text-[#9495A5] font-bold text-[14px] cursor-pointer">
              Completed
            </p>
          </div>
          <button
            onClick={clearCompleted}
            className="text-[12px] md:text-[18px] text-[#9495A5]"
          >
            Clear Completed
          </button>
        </>
      )}
    </div>
  );
};

export default TaskListControls;
