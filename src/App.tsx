import React, { FC } from "react";
import "./App.css";
import { HeaderAPP } from "./components/header/header";
import { MainAPP } from "./components/main/main";
import { NavigationAPP } from "./components/nav/nav";
import { BrowserRouter, Route } from "react-router-dom";
import { Music } from "./components/music/music";
import { News } from "./components/news/news";
import { DialogsContainer } from "./components/dialogs/dialogsContainer";
import { connect } from "react-redux";
import { ContainerUser } from "./components/users/containerUser";
import { StateType } from "./components/redusers/redux-store";
import { ConnectContainerHeader } from "./components/header/conteinerheader";
import { LoginUser } from "./components/login/loginUser";


const App = () => {
  let varibalsMainAPP = () => (
    <MainAPP />
  );
  let varibalsDialogs = () => (
      <DialogsContainer  />
  );

  let varibalsContainer = () => <ContainerUser />;
  return (
    <BrowserRouter>
      <div className="App">
        <ConnectContainerHeader />
        <ContainerNav />
        <div className="content">
          <Route path="/prof/:userID?" render={varibalsMainAPP} />
          <Route path="/dial" render={varibalsDialogs} />
          <Route path="/music/*" component={Music} />
          <Route path="/news/*" component={News} />
          <Route path="/user" render={varibalsContainer} />
          <Route path="/login" component={LoginUser} />
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