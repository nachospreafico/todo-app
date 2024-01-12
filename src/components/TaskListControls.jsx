import { useTodoContext } from "../context/TodoContext";

const TaskListControls = () => {
  const {
    isMobile,
    showAll,
    todoList,
    clearCompleted,
    filterCompleted,
    showCompleted,
    filterActive,
    showActive,
    darkMode,
  } = useTodoContext();

  const activeTasks = todoList.filter((elem) => !elem.completed).length;
  const completedTasks = todoList.filter((elem) => elem.completed).length;

  return (
    <div
      className={`py-[14px] md:py-5 px-5 flex flex-row justify-between items-center relative ${
        darkMode ? "bg-[#25273D]" : "bg-white"
      }`}
    >
      {isMobile ? (
        <>
          <p className="text-[12px] md:text-[18px] text-[#9495A5]">
            {showCompleted
              ? `${completedTasks} tasks completed`
              : `${activeTasks} tasks left`}
          </p>
          <button
            onClick={clearCompleted}
            className="text-[12px] md:text-[18px] text-[#9495A5]"
          >
            Clear Completed
          </button>
          <div
            className={`absolute ${
              darkMode ? "bg-[#25273D]" : "bg-white"
            } w-full py-[14px] md:py-5 px-5 flex flex-row justify-center bottom-[-70px] left-0 rounded-[5px]  shadow-xl items-center`}
          >
            <div className="flex flex-row gap-5">
              <p
                onClick={showAll}
                className={` font-bold text-[14px] cursor-pointer ${
                  !showActive && !showCompleted
                    ? "text-[#3A7CFD]"
                    : "text-[#9495A5]"
                }`}
              >
                All
              </p>
              <p
                onClick={filterActive}
                className={` font-bold text-[14px] cursor-pointer ${
                  showActive ? "text-[#3A7CFD]" : "text-[#9495A5]"
                }`}
              >
                Active
              </p>
              <p
                onClick={filterCompleted}
                className={`   font-bold text-[14px] cursor-pointer ${
                  showCompleted ? "text-[#3A7CFD]" : "text-[#9495A5]"
                }`}
              >
                Completed
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-[14px] text-[#9495A5]">
            {showCompleted
              ? `${completedTasks} tasks completed`
              : `${activeTasks} items left`}
          </p>
          <div className="flex flex-row gap-5">
            <p
              onClick={showAll}
              className={`${
                !showActive && !showCompleted
                  ? "text-[#3A7CFD]"
                  : "text-[#9495A5]"
              } md:hover:text-[#494C6B] duration-200 font-bold text-[14px] cursor-pointer`}
            >
              All
            </p>
            <p
              onClick={filterActive}
              className={`${
                showActive && "text-[#3A7CFD]"
              } md:hover:text-[#494C6B] text-[#9495A5] duration-200 font-bold text-[14px] cursor-pointer`}
            >
              Active
            </p>
            <p
              onClick={filterCompleted}
              className={`${
                showCompleted && "text-[#3A7CFD]"
              } md:hover:text-[#494C6B] text-[#9495A5] duration-200 font-bold text-[14px] cursor-pointer`}
            >
              Completed
            </p>
          </div>
          <button
            onClick={clearCompleted}
            className="md:hover:text-[#494C6B] duration-200 text-[12px] md:text-[14px] text-[#9495A5]"
          >
            Clear Completed
          </button>
        </>
      )}
    </div>
  );
};

export default TaskListControls;
