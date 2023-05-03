import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataPostType } from "./components/redusers/reduсer_post";
import { InitStateType } from "./components/redusers/reduсer.messages";
import { Name } from "./components/redusers/reduсer_name";
import { store } from "./components/redusers/redux-store";
import { Providers} from "./context";

export type StateType = {
  dataPost: DataPostType;
  mesOBJ: InitStateType;
  names: Name[];
  sidebar: string[];
};

export const rerender = (state: StateType) => {
  console.log(state);
  ReactDOM.render(
    <Providers value={'hello'}>
      <App store={state} dispatch={store.dispatch.bind(store)} />
    </Providers>,
    document.getElementById("root")
  );
};
rerender(store.getState());

store.subscribe(() => rerender(store.getState()));
