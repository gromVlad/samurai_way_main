import React from "react";
import s from "./newPost.module.css";
import { Post } from "./post/post";
import { dataMesAndLikeType } from "../../../App";

type NewPostType = {
  dataMesAndLike: Array<dataMesAndLikeType>
};


export function NewPost(props: NewPostType) {

  const arrdataMesAndLike = props.dataMesAndLike.map((el) => (
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
