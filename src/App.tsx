import React, { FC, useEffect } from "react";
import "./App.css";
import { MainAPP } from "./components/main/main";
import { NavigationAPP } from "./components/nav/nav";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { Music } from "./components/music/music";
import { News } from "./components/news/news";
import { DialogsContainer } from "./components/dialogs/dialogsContainer";
import { connect } from "react-redux";
import { ContainerUser } from "./components/users/containerUser";
import { StateType } from "./components/redusers/redux-store";
import { ConnectContainerHeader } from "./components/header/conteinerheader";
import { ContainerLoginUser} from "./components/login/loginUser";
import { loginCreatorThunk } from "./components/redusers/reduсer_login";
import { Preloader } from "./components/preloader/preloader";


const App = (props:any) => {
  
  useEffect(() => {
    <Preloader />
    props.loginCreatorThunk();
  }, []);  


  let varibalsMainAPP = () => (
    <MainAPP />
  );
  let varibalsDialogs = () => (
      <DialogsContainer  />
  );
  let varibalsContainer = () => <ContainerUser />;

  
  return (
    <div className="App">
      <ConnectContainerHeader />
      <ContainerNav />
      <div className="content">
        <Route path="/prof/:userID?" render={varibalsMainAPP} />
        <Route path="/dial" render={varibalsDialogs} />
        <Route path="/music/*" component={Music} />
        <Route path="/news/*" component={News} />
        <Route path="/user" render={varibalsContainer} />
        <Route path="/login" component={ContainerLoginUser} />
        {props.resultCode === 1 && <Redirect to={"/login"} />}
      </div>
    </div>
  ); 
}

const mapStoreToProps = (state:StateType) => {
  return{
    store:state
  }
};

const ContainerNav = connect(mapStoreToProps)(NavigationAPP);

const mapToPropsApp = (state: StateType) => {
  return {
    resultCode: state.login.resultCode,
  };
};

export const ContainerApp = connect(mapToPropsApp, {loginCreatorThunk})(App);
