import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     Hello, samurai! Let's go! my name is Vlad
     <Star />
     <Star />
     <Star />
     <Star />
     <Star />
    </div>
  );
}

export default App;

function Star (){
  debugger
  return <div>*</div>
}