import React, { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoContextProvider = ({ children }) => {
  const initialTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
  const [todoList, setTodoList] = useState(initialTodoList);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    setIsMobile(window.innerWidth < 768);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function addTodo(task, id, completed) {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { text: task, id: id, completed: completed },
    ]);
  }

  function removeTask(id) {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((task) => task.id !== id)
    );
  }

  function clearCompleted() {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((task) => !task.completed)
    );
  }

  function filterCompleted() {}

  function toggleCompleted(id) {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        removeTask,
        isMobile,
        toggleCompleted,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
