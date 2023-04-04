import React from "react";
import s from "./headmain.module.css";


export function Headmain() {
  return (
    <div className={s.content}>
      <img
        src="https://public.bnbstatic.com/image/cms/blog/20220329/7c0fb91f-61db-4541-9a33-8b76dde47b36.png"
        alt="play"
      />
      <div className={s.titles}>
        <h2>description + ava</h2>
        <h3>My post</h3>
      </div>
    </div>
  );
}
