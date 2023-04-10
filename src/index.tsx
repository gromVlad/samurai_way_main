import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const names = [
  { name: "Vlad", id: 1 },
  { name: "Alex", id: 2 },
  { name: "Andor", id: 3 },
  { name: "Carl", id: 4 },
  { name: "Jack", id: 5 },
];


const messages = [
  { mes: "Hello my name is Vlad" },
  { mes: "What.." },
  { mes: "Hello" },
  { mes: "Hello my name is Vlad" },
  { mes: "my names.." },
];

 const dataMesAndLike = [
   {
     mes: "hello world",
     like: 23,
   },
   {
     mes: "What your name?",
     like: 15,
   },
 ];


ReactDOM.render(
  <App names = {names} messages={messages} dataMesAndLike={dataMesAndLike} />,
  document.getElementById("root")
);

