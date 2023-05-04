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
import { connect } from "react-redux";


const App = () => {
  let varibalsMainAPP = () => (
    <MainAPP />
  );
  let varibalsDialogs = () => (
      <DialogsContainer  />
  );

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderAPP />
        <ContainerNav />
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

let mapStoreToProps = (state:StateType) => {
  return{
    store:state
  }
};

const ContainerNav = connect(mapStoreToProps)(NavigationAPP);