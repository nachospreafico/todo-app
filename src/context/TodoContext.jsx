import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoContextProvider = ({ children }) => {
  const initialTodoList = JSON.parse(localStorage.getItem("todoList")) || [];

  const [todoList, setTodoList] = useState(initialTodoList);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleWindowSizeChange = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    setIsMobile(window.innerWidth < 768);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = useCallback(
    (task, id, completed) => {
      setTodoList((prevTodoList) => [
        ...prevTodoList,
        { text: task, id: id, completed: completed },
      ]);
    },
    [setTodoList]
  );

  const removeTask = useCallback(
    (id) => {
      setTodoList((prevTodoList) =>
        prevTodoList.filter((task) => task.id !== id)
      );
    },
    [setTodoList]
  );

  const clearCompleted = useCallback(() => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((task) => !task.completed)
    );
  }, [setTodoList]);

  const filterCompleted = useCallback(() => {
    setShowCompleted(true);
    setShowActive(false);
  }, [setShowCompleted, setShowActive]);

  const showAll = useCallback(() => {
    setShowCompleted(false);
    setShowActive(false);
  }, [setShowCompleted, setShowActive]);

  const filterActive = useCallback(() => {
    setShowCompleted(false);
    setShowActive(true);
  }, [setShowCompleted, setShowActive]);

  const toggleCompleted = useCallback(
    (id) => {
      setTodoList((prevTodoList) =>
        prevTodoList.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [setTodoList]
  );

  const filteredTodoList = useMemo(() => {
    if (showCompleted) return todoList.filter((task) => task.completed);
    if (showActive) return todoList.filter((task) => !task.completed);
    return todoList;
  }, [todoList, showCompleted, showActive]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList: filteredTodoList,
        addTodo,
        removeTask,
        isMobile,
        toggleCompleted,
        clearCompleted,
        filterCompleted,
        showCompleted,
        showAll,
        filterActive,
        showActive,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
