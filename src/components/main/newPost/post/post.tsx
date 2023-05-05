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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtD45prNekiuSr4v-cmb9PT1udNRsRlrxEkJI8fXFBtbt-9A2c3OVKrG9fuoR0VIlTf4&usqp=CAU"
          alt="ava"
        />
      </div>
      <div className={s["post-content"]}>{props.message}</div>
      <div>{props.like}</div>
      <div>Dislike</div>
    </div>
  );
}
