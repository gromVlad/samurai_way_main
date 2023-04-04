import React from "react";
import s from "./main.module.css";
import { NewPost } from "./newPost/newPost";
import { Headmain } from "./headmain/headmain";


export function MainAPP() {
  return (
    <main className={s.content}>
        <Headmain />
        <NewPost />
      </main>
  );
}
     