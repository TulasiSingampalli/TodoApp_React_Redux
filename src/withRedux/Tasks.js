import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Tasks = () => {
  const Todo = useSelector((state) => state.Todo);
  const [search, setSearch] = useState("");
  const { todos } = Todo; //now todos is array
  const dispatch = useDispatch();

  const searchTodo = () => {
    dispatch({ type: "SEARCH_TODO", payload: search });
    setSearch("");
  };

  return (
    <div className="tasks-container">
      <div className="search-container">
        <input
          style={{ width: "25vw", height: "5vh" }}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔎Search"
        />
        <button className="todo-button" onClick={searchTodo}>
          Go
        </button>
      </div>
      <div className="total-tasks-container">Total tasks: {todos.length}</div>
    </div>
  );
};
