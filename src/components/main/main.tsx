import React from "react";
import s from "./main.module.css";
import { NewPost } from "./newPost/newPost";


export function MainAPP() {
  return (
    <main className={s.content}>
        <img
          src="https://public.bnbstatic.com/image/cms/blog/20220329/7c0fb91f-61db-4541-9a33-8b76dde47b36.png"
          alt="play"
        />
        <p>description + ava</p>
        <div>My post</div>
        <NewPost />
      </main>
  );
}
