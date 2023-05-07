import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./components/redusers/redux-store";
import { Provider } from "react-redux";

export const rerender = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
rerender();

store.subscribe(() => rerender());
