import React from "react";
import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";
import { Message } from "./message/message";
import { Users } from "./users/users";
import { namesType } from "../../App";
import { MessageType } from "../../App";

type DialogsType = {
  names:Array<namesType>
  messages:Array<MessageType>
};


export function Dialogs(props: DialogsType) {

  const arrNames = props.names.map((el) => <Users name={el.name} id={el.id} />);

  const arrMessages = props.messages.map((el) => <Message mes={el.mes} />);

  return (
    <main>
      <div className={s.content}>
        <div className={s.content__users}>{arrNames}</div>
        <div className={s.content__messages}>{arrMessages}</div>
      </div>
    </main>
  );
}



