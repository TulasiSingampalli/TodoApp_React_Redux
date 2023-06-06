export const TodoReducer = (
  state = { todos: [], searchResult: [] },
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [action.payload, ...state.todos], searchResult: [] };
    case "REMOVE_TODO":
      return { todos: action.payload, searchResult: [] };
    case "CLEAR_TODO":
      return { todos: [], searchResult: [] };
    case "SEARCH_TODO":
      const keyword = action.payload.toLowerCase();
      const filteredTodos = state.todos.filter((todo) =>
        todo.toLowerCase().includes(keyword)
      );
      if (filteredTodos.length === 0) {
        return { ...state, searchResult: ["Todo Not Found"] };
      } else {
        return { ...state, searchResult: filteredTodos };
      }
    default:
      return state;
  }
};
