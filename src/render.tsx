import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { newAddPost } from "./data";

export let rerender = (props: any) => {

  ReactDOM.render(
    <App
      names={props.names}
      messages={props.messages}
      dataMesAndLike={props.dataMesAndLike}
      sidebar={props.sidebar}
      funAddPost={newAddPost}
    />,
    document.getElementById("root")
  );
};
