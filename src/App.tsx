import { useEffect } from "react";
import React, { lazy, Suspense } from "react";
import "./App.css";
import { MainAPP } from "./components/main/main";
import { NavigationAPP } from "./components/nav/nav";
import { Redirect, Route, withRouter } from "react-router-dom";
import { Music } from "./components/music/music";
import { News } from "./components/news/news";
import { DialogsContainer } from "./components/dialogs/dialogsContainer";
import { connect } from "react-redux";
//import { ContainerUser } from "./components/users/containerUser";
import { StateType } from "./components/redusers/redux-store";
import { ConnectContainerHeader } from "./components/header/conteinerheader";
import { ContainerLoginUser } from "./components/login/loginUser";
import { initLogUserThunk } from "./components/redusers/reducer_init";
import { compose } from "redux";
import { Preloader } from "./components/preloader/preloader";

const ContainerUser = lazy(() =>
  import("./components/users/containerUser").then((module) => ({
    default: module.ContainerUser,
  }))
);

const App = (props: any) => {
  useEffect(() => {
    props.initLogUserThunk();
  }, []);

  if (props.initLogin === false) {
    return <Preloader />;
  }

  let varibalsMainAPP = () => <MainAPP />;
  let varibalsDialogs = () => <DialogsContainer />;
  let varibalsContainer = () => (
    <Suspense fallback={<div><Preloader/></div>}>
      <ContainerUser />
    </Suspense>
  );

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
      </div>
    </div>
  );
};

const mapStoreToProps = (state: StateType) => {
  return {
    store: state,
  };
};

const ContainerNav = connect(mapStoreToProps)(NavigationAPP);

const mapToPropsApp = (store: StateType) => {
  return {
    initLogin: store.initLogin.initBoolean,
  };
};

export const ContainerApp = compose(
  connect(mapToPropsApp, { initLogUserThunk })
)(App);
