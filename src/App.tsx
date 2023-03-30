
import React from "react";
import "./App.css";
import { HeaderAPP } from "./components/header/header";
import { MainAPP } from "./components/main/main";
import { NavigationAPP } from "./components/nav/nav";

function App() {
  return (
    <div className="App">
      <HeaderAPP />
      <MainAPP />
      <NavigationAPP />
    </div>
   )   
}
export default App;
