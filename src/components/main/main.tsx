import React from "react";
import s from "./main.module.css";
import { Headmain } from "./headmain/headmain";
import { Action } from "../../data";
import { StateType } from "../..";
import { NewPostContainer } from "./newPost/newPostContainer";


type MainAPPType = {
  store: StateType;
  dispatch: (action: any) => void;
};

export function MainAPP(props: MainAPPType) {
  return (
    <main className={s.content}>
      <Headmain />
      <NewPostContainer store={props.store} dispatch={props.dispatch} />
    </main>
  );
}
     