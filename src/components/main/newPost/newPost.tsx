import React from "react";
import s from "./newPost.module.css";
import { Post } from "./post/post";


export function NewPost() {
  return (
    <div className={s.block}>
       <textarea ></textarea>
       <div>
        <button>Click</button>
       </div>
          <Post message="hello world"/>
          <Post message="What your name?"/>
      </div>
  );
}
