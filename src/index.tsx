import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./components/redusers/redux-store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ContainerApp } from "./App";

export const rerender = () => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <ContainerApp />
      </Provider>
    </HashRouter>,
    document.getElementById("root")
  );
};
rerender();

store.subscribe(() => rerender());
