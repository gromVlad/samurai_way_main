import React from "react";
import s from "./main.module.css";
import { NewPost } from "./newPost/newPost";
import { Headmain } from "./headmain/headmain";
import { dataMesAndLikeType } from "../../App";


type MainAPPType = {
  dataMesAndLike: Array<dataMesAndLikeType>
};

export function MainAPP(props: MainAPPType) {
  return (
    <main className={s.content}>
      <Headmain />
      <NewPost dataMesAndLike= {props.dataMesAndLike} />
    </main>
  );
}
     