import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos, onAddTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") {
      alert("No empty todos please 😅");
      return;
    }
    onAddTodo(input);
    setInput("");
  };

  return (
    <div>
      <div style={styles.inputGroup}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo..."
          style={styles.input}
        />
        <button onClick={handleSubmit} style={styles.button}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} title={todo.text} />
        ))}
      </ul>
    </div>
  );
}

const styles = {
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "8px 12px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default TodoList;
