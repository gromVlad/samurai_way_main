import React, { useState } from "react";
import s from "./newPost.module.css";
import { Post } from "./post/post";
import { dataMesAndLikeType } from "../../../App";
import { log } from "console";

type NewPostType = {
  dataMesAndLike: Array<dataMesAndLikeType>;
  funAddPost: (a: string) => void;
};


export function NewPost(props: NewPostType) {

  const arrdataMesAndLike = props.dataMesAndLike.map((el) => (
    <Post message={el.mes} like={el.like} />
  ));
  let [text,setText] = useState<string>('')

  const addText = () => {
    props.funAddPost(text)
    setText("")
  }

  return (
    <div className={s.block}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>
        <button onClick={addText}>Click</button>
      </div>
      {arrdataMesAndLike}
    </div>
  );
}
