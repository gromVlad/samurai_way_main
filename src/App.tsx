import React, { FC } from "react";
import "./App.css";
import { HeaderAPP } from "./components/header/header";
import { MainAPP } from "./components/main/main";
import { NavigationAPP } from "./components/nav/nav";
import { BrowserRouter, Route } from "react-router-dom";
import { Music } from "./components/music/music";
import { News } from "./components/news/news";
import { StateType } from ".";
import { DialogsContainer } from "./components/dialogs/dialogsContainer";


type AppType = {
  store: StateType;
  dispatch: (action: any) => void;
};


const App: React.FC<AppType> = (props) => {
  let varibalsMainAPP = () => (
    <MainAPP store={props.store} dispatch={props.dispatch} />
  );
  let varibalsDialogs = () => (
    <DialogsContainer store={props.store} dispatch={props.dispatch} />
  );

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderAPP />
        <NavigationAPP store = {props.store} />
        <div className="content">
          <Route path="/prof" render={varibalsMainAPP} />
          <Route path="/dial" render={varibalsDialogs} />
          <Route path="/music/*" component={Music} />
          <Route path="/news/*" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );   
}
export default App;
