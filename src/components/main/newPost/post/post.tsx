import React from "react";
import s from "./post.module.css";

type PostPropsType = {
  message: string;
  like: number;
};

export function Post(props: PostPropsType) {
  return (
    <div className={s.post}>
      <div className={s.img}>
        <img
          src="https://cspromogame.ru//storage/upload_images/avatars/3981.jpg"
          alt="ava"
        />
      </div>
      <div className={s["post-content"]}>{props.message}</div>
      <div>{props.like}</div>
      <div>Dislike</div>
    </div>
  );
}
