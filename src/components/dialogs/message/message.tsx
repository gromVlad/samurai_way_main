import React from "react";
import s from "./../dialogs.module.css";


type MessageType = {
  mes:string
}

export const Message = (props: MessageType) => {
  return <p className={s.content__message}>{props.mes}</p>;
};