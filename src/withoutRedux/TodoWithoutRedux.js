import React, { useState } from "react";
export const TodoWithoutRedux = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");

  const addTodo = () => {
    if (input.trim() === "") setError("Enter valid input");
    else {
      setTodo([input, ...todo]);
      setInput("");
      setError("");
    }
  };

  const removeTodo = (index) => {
    setTodo(todo.filter((t, i) => i !== index));
  };

  return (
    <div>
      <div> Todo Application </div>
      <br />
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addTodo}>Go</button>
      <br />
      <br />
      {error && <div style={{ color: "red" }}>{error}</div>}

      {todo.map((t, id) => (
        <div key={id}>
          {t}
          <button style={{ marginLeft: "10px" }} onClick={() => removeTodo(id)}>
            Del
          </button>
        </div>
      ))}
    </div>
  );
};
