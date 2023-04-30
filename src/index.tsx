import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './data';
import { Store } from 'antd/lib/form/interface';

export const rerender = (props:Store) => {
  let { names, dataPost, sidebar, mesOBJ } = props;

  ReactDOM.render(
    <App
      textMessage={mesOBJ.textMessage}
      names={names}
      messages={mesOBJ.messages}
      dataMesAndLike={dataPost.dataMesAndLike}
      sidebar={sidebar}
      dispatch={store.dispatch.bind(store)}
      textPost={dataPost.textPost}
    />,
    document.getElementById("root")
  );
};
rerender(store.getState())

//передаем callback функцию rerender
store.funRerender(() => rerender(store.getState()));

