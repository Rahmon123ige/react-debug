import React from "react";

function TodoItem({ title }) {
  return <li style={styles.item}>📝 {title}</li>;
}

const styles = {
  item: {
    padding: "6px 0",
    fontSize: "16px",
  },
};

export default TodoItem;
