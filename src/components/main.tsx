import React from "react";
import s from "./main.module.css";


export function MainAPP() {
  return (
    <main className={s.content}>
        <img
          src="https://public.bnbstatic.com/image/cms/blog/20220329/7c0fb91f-61db-4541-9a33-8b76dde47b36.png"
          alt="play"
        />
        <div className={s.ava}>
          <img
            src="https://cspromogame.ru//storage/upload_images/avatars/3981.jpg"
            alt="ava"
          />
        </div>
        <p>description</p>
        <div>My post</div>
        <div>New post</div>
        <div>post one</div>
        <div>post two</div>
      </main>
  );
}
