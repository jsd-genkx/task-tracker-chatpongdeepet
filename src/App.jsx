import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        console.log(tasks);
    };

    const handleDelete = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const handleEditTask = (taskId, updatedText) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, text: updatedText } : task
            )
        );
    };

    return (
        <div className="text-center p-5 border">
            <h1>Task Tracker</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onDelete={handleDelete}
                onEdit={handleEditTask}
            />
            <h2></h2>
        </div>
    );
}
