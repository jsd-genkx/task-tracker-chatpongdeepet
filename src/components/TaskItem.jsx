export default function TaskItem({ task, onDelete }) {
  return (
    <>
      <p>{task.text}</p>
      <button className="border" onClick={() => onDelete(task.id)}>
        delete
      </button>
    </>
  );
}
