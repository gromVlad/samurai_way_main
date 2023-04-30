import React from "react";
import s from "./main.module.css";
import { NewPost } from "./newPost/newPost";
import { Headmain } from "./headmain/headmain";
import { dataMesAndLikeType } from "../../App";
import { Action } from "../../data";


type MainAPPType = {
  dataMesAndLike: Array<dataMesAndLikeType>;
  dispatch: (action: Action) => void;
  textPost: string;
};

export function MainAPP(props: MainAPPType) {
  return (
    <main className={s.content}>
      <Headmain />
      <NewPost
        dataMesAndLike={props.dataMesAndLike}
        dispatch={props.dispatch}
        textPost={props.textPost}
      />
    </main>
  );
}
     