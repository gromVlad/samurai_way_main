import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { funRerender, globalData} from './data';
import { addTextPost, newAddPost } from "./data";

export let rerender = (props:any) => {
  let {names,messages,dataMesAndLike,sidebar,textPost,...other} = props

  ReactDOM.render(
    <App
      names={names}
      messages={messages}
      dataMesAndLike={dataMesAndLike}
      sidebar={sidebar}
      funAddPost={newAddPost}
      addTextPost={addTextPost}
      textPost={textPost}
    />,
    document.getElementById("root")
  );
};
rerender(globalData)

//передаем callback функцию rerender
funRerender(rerender);

