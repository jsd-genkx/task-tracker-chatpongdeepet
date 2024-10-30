import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <>
      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} />
        ))
      )}
    </>
  );
}
