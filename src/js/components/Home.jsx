import React, { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = e => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTasks(prev => [...prev, input.trim()]);
      setInput("");
    }
  };

  const removeTask = idx =>
    setTasks(prev => prev.filter((_, i) => i !== idx));

  return (
    <div className="todo-wrapper">
      <h1 className="todo-title">todos</h1>

      <div className="todo-container">
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {tasks.length === 0 ? (
          <p className="empty">No hay tareas, añade tareas</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task, idx) => (
              <li key={idx} className="task-item">
                <span className="task-text">{task}</span>
                <button
                  className="delete-btn"
                  onClick={() => removeTask(idx)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        {tasks.length > 0 && (
          <div className="footer">
            <span>
              {tasks.length} item{tasks.length !== 1 ? "s" : ""} left
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
