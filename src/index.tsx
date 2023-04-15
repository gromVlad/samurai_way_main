import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { globalData} from './data';
import { rerender } from './render';


const { names, messages, dataMesAndLike, sidebar } = globalData;

rerender(globalData)

