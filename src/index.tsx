import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AllGlobalType, store} from './data';

export const rerender = (props:AllGlobalType) => {
  let { names, messages, dataMesAndLike, sidebar, textPost, textMessage } =
    props;

  ReactDOM.render(
    <App
      textMessage={textMessage}
      names={names}
      messages={messages}
      dataMesAndLike={dataMesAndLike}
      sidebar={sidebar}
      dispatch={store.dispatch.bind(store)}
      textPost={textPost}
    />,
    document.getElementById("root")
  );
};
rerender(store.getState())

//передаем callback функцию rerender
store.funRerender(() => rerender(store.getState()));

