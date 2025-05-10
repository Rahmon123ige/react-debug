import React, { useState } from "react";
import TodoList from "./component/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Anu is a good girl" },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
  };

  return (
    <div style={styles.app}>
      <h1>My Todo List ✅</h1>
      <TodoList todos={todos} onAddTodo={addTodo} />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial",
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
};

export default App;
