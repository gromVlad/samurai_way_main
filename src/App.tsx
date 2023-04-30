import React, { FC } from "react";
import "./App.css";
import { HeaderAPP } from "./components/header/header";
import { MainAPP } from "./components/main/main";
import { NavigationAPP } from "./components/nav/nav";
import { Dialogs } from "./components/dialogs/dialogs";
//includes BrowserRouter, Route
import { BrowserRouter, Route } from "react-router-dom";
import { Music } from "./components/music/music";
import { News } from "./components/news/news";
import { Action } from "./data";

export type namesType = {
  name:string,
  id:number
}

export type dataMesAndLikeType ={
  mes:string,
  like:number
}
export type MessageType ={
  mes:string
}

type AppType = {
  names: Array<namesType>;
  messages: Array<MessageType>;
  dataMesAndLike: dataMesAndLikeType[];
  sidebar: Array<string>;
  dispatch: (action: Action) => void;
  textPost: string;
  textMessage:string;
};


const App: React.FC<AppType> = (props) => {
  let {
    names,
    messages,
    dataMesAndLike,
    sidebar,
    dispatch,
    textPost,
    textMessage,
  } = props;

  let varibalsMainAPP = () => (
    <MainAPP
      dataMesAndLike={dataMesAndLike}
      dispatch={dispatch}
      textPost={textPost}
    />
  );
  let varibalsDialogs = () => (
    <Dialogs
      names={names}
      messages={messages}
      textMessage={textMessage}
      dispatch={dispatch}
    />
  );

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderAPP />
        <NavigationAPP sidebar = {sidebar} />
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
