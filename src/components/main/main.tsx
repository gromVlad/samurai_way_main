import React from "react";
import s from "./main.module.css";
import { NewPost } from "./newPost/newPost";
import { Headmain } from "./headmain/headmain";
import { dataMesAndLikeType } from "../../App";


type MainAPPType = {
  dataMesAndLike: Array<dataMesAndLikeType>;
  funAddPost: () => void;
  addTextPost: (a: string) => void;
  textPost:string
};

export function MainAPP(props: MainAPPType) {
  return (
    <main className={s.content}>
      <Headmain />
      <NewPost
        dataMesAndLike={props.dataMesAndLike}
        funAddPost={props.funAddPost}
        addTextPost={props.addTextPost}
        textPost={props.textPost}
      />
    </main>
  );
}
     