import React from "react";
import s from "./newPost.module.css";
import { Post } from "./post/post";


export function NewPost() {
  const dataMesAndLike = [
    {
      mes: "hello world",
      like: 23,
    },
    {
      mes: "What your name?",
      like: 15,
    },
  ];

  return (
    <div className={s.block}>
      <textarea></textarea>
      <div>
        <button>Click</button>
      </div>
      <Post message={dataMesAndLike[0].mes} like={dataMesAndLike[0].like} />
      <Post message={dataMesAndLike[1].mes} like={dataMesAndLike[1].like} />
    </div>
  );
}
