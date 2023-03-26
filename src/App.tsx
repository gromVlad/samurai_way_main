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
     <Text />
    </div>
  );
}

export default App;

function Star (){
  debugger
  return <div>*</div>
}

//add fragment
function Text (){
  return <>usually text</>; //<-----fragment
}