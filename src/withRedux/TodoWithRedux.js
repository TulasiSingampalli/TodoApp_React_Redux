import React, { useState } from "react";
import { addTodoToList, clearTodos, removeTodoFromList } from "./TodoActions";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const TodoWithRedux = () => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);

  const addTodo = () => {
    if (todo.trim() === "") setError("Enter valid input");
    else {
      dispatch(addTodoToList(todo));
      toast.success("Todo added !");
      setTodo("");
      setError("");
    }
  };

  const removeTodo = (index) => {
    dispatch(removeTodoFromList(index));
    toast.warning("Todo removed !");
  };

  const clearTodo = () => {
    dispatch(clearTodos());
    toast.warning("Todo cleared !");
  };

  return (
    <div className="todo-container">
      <input
        className="todo-input"
        type="text"
        placeholder="Enter Todo ..."
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <div>
        <button className="todo-button" onClick={addTodo}>
          Add
        </button>
        <button className="todo-button" onClick={clearTodo}>
          Clear All
        </button>
      </div>
      <br /> <br />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div className="my-list">
        {Todo.searchResult.length > 0 ? (
          Todo.searchResult[0] === "Todo Not Found" ? (
            "Todo Not Found"
          ) : (
            <ul className="todo-list">
              {Todo.searchResult.map((t, id) => (
                <li key={id} className="todo-item">
                  <span className="todo-item-text">{t}</span>
                  <button
                    className="todo-item-remove"
                    onClick={() => removeTodo(id)}
                  >
                    <span role="img" aria-label="Remove Todo">
                      ❌
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )
        ) : (
          <ul className="todo-list">
            {Todo.todos.map((t, id) => (
              <li key={id} className="todo-item">
                <span className="todo-item-text">{t}</span>
                <button
                  className="todo-item-remove"
                  onClick={() => removeTodo(id)}
                >
                  <span role="img" aria-label="Remove Todo">
                    ❌
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
