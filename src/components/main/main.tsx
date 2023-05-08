import React from "react";
import s from "./main.module.css";
import { Headmain } from "./headmain/headmain";
import { NewPostContainer } from "./newPost/newPostContainer";
import { ConnectContainerHeadmain} from "./headmain/headmainContainer";


export function MainAPP() {
  return (
    <main className={s.content}>
      <ConnectContainerHeadmain />
      <NewPostContainer />
    </main>
  );
}
     