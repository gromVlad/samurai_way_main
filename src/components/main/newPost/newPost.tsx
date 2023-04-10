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

  const arrdataMesAndLike = dataMesAndLike.map((el) => (
    <Post message={el.mes} like={el.like} />
  ));

  return (
    <div className={s.block}>
      <textarea></textarea>
      <div>
        <button>Click</button>
      </div>
     {arrdataMesAndLike}
    </div>
  );
}
