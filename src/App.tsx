
import React from "react";
import "./App.css";
import { HeaderAPP } from "./components/header";
import { MainAPP } from "./components/main";
import { NavigationAPP } from "./components/nav";

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
