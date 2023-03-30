import React from "react";
import s from "./post.module.css";

export function Post() {
  return (
    <div>
      <div className={s.img}>
        <img
          src="https://cspromogame.ru//storage/upload_images/avatars/3981.jpg"
          alt="ava"
        />
      </div>
      <div>like</div>
      <div>Dislike</div>
    </div>
  );
}
