import React from "react";
import s from "./main.module.css";
import { Headmain } from "./headmain/headmain";
import { NewPostContainer } from "./newPost/newPostContainer";


export function MainAPP(/* props: MainAPPType */) {
  return (
    <main className={s.content}>
      <Headmain />
      <NewPostContainer /* store={props.store} dispatch={props.dispatch} */ />
    </main>
  );
}
     