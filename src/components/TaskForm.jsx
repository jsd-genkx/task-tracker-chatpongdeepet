import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [inputText, setInputText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (inputText.trim()) {
      onAddTask({
        id: Date.now(),
        inputText,
      });
      setInputText("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter input task..."
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
        className="pl-3 border rounded-lg"
      />
      <button className="border bg-slate-500 text-white rounded-lg px-5">
        Add
      </button>
    </form>
  );
}
