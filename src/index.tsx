import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { globalData } from './data';


const { names, messages, dataMesAndLike, sidebar } = globalData;

ReactDOM.render(
  <App
    names={names}
    messages={messages}
    dataMesAndLike={dataMesAndLike}
    sidebar = {sidebar}
  />,
  document.getElementById("root")
);

