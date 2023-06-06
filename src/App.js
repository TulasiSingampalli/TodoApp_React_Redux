import { Provider } from "react-redux";
import "./styles.css";
import { store } from "./withRedux/store";
import { Tasks } from "./withRedux/Tasks";
import { TodoWithRedux } from "./withRedux/TodoWithRedux";
import { ToastContainer } from "react-toastify";
// import { TodoWithoutRedux } from "./withoutRedux/TodoWithoutRedux";

export default function App() {
  return (
    <div className="App">
      <h1>TODO APPLICATION</h1>
      <ToastContainer />
      {/* <TodoWithoutRedux />  */}
      <Provider store={store}>
        <Tasks />
        <TodoWithRedux />
      </Provider>
    </div>
  );
}
