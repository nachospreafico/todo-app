import { useState, useEffect } from "react";

import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskListControls from "./components/TaskListControls";

function App() {
  return (
    <main className="min-h-screen w-full relative">
      <Header />
      <div className="max-w-[540px] w-[87.2%] absolute top-[108px] md:top-[110px] xl:top-[158px] left-[50%] translate-x-[-50%] flex flex-col gap-4 md:gap-6">
        <TaskInput />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
