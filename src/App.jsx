import { useState } from "react";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log(tasks);
  };

  return (
    <div className="text-center p-5 border">
      <h1>Task Tracker</h1>
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
}
