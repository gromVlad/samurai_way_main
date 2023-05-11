import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./components/redusers/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {  ContainerApp } from "./App";

export const rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
      <ContainerApp />
    </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerender();

store.subscribe(() => rerender());
