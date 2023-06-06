export const addTodoToList = (todo) => (dispatch) => {
  dispatch({
    type: "ADD_TODO",
    payload: todo
  });
};

export const removeTodoFromList = (index) => (dispatch, getState) => {
  const {
    Todo: { todos }
  } = getState();
  dispatch({
    type: "REMOVE_TODO",
    payload: todos.filter((t, id) => id !== index)
  });
};

export const clearTodos = () => (dispatch, getState) => {
  dispatch({
    type: "CLEAR_TODO"
  });
};
