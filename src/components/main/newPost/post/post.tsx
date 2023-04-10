import React from "react";
import s from "./post.module.css";

export function Post(props:any) {
  return (
    <div>
      <div className={s.img}>
        <img
          src="https://cspromogame.ru//storage/upload_images/avatars/3981.jpg"
          alt="ava"
        />
      </div>
      {props.message}
      <div>{props.like}</div>
      <div>Dislike</div>
    </div>
  );
}
