import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataPostType } from "./components/redusers/reduсer_post";
import { InitStateType } from "./components/redusers/reduсer.messages";
import { Name } from "./components/redusers/reduсer_name";
import { store } from "./components/redusers/redux-store";
import { Provider } from "react-redux";

export type StateType = {
  dataPost: DataPostType;
  mesOBJ: InitStateType;
  names: Name[];
  sidebar: string[];
};

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
