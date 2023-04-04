
import React from "react";
import "./App.css";
import { HeaderAPP } from "./components/header/header";
import { MainAPP } from "./components/main/main";
import { NavigationAPP } from "./components/nav/nav";
import { Dialogs } from "./components/dialogs/dialogs";
//includes BrowserRouter, Route
import { BrowserRouter, Route } from "react-router-dom";
import { Music } from "./components/music/music";
import { News } from "./components/news/news";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderAPP />
        {/* <MainAPP /> */}
        <NavigationAPP />
        {/* includes route in chois content on href(path) */}
        <div className="content">
          <Route path="/prof" component={MainAPP} />
          <Route path="/dial" component={Dialogs} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );   
}
export default App;
