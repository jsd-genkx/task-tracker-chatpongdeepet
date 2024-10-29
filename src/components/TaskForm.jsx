import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTask({ id: Date.now(), input });
      setInput;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="input"
        name="name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Task"
      />
      <button>Submit</button>
    </form>
  );
}
