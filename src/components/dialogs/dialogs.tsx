import React, { ChangeEvent, useState } from "react";
import s from "./dialogs.module.css";
import { Message } from "./message/message";
import { Users } from "./users/users";
import { namesType } from "../../App";
import { MessageType } from "../../App";
import { Action } from "../../data";
import { addMesActCreator, addTextMesActCreator } from "../redusers/reduser.messages";

type DialogsType = {
  names: Array<namesType>;
  messages: Array<MessageType>;
  textMessage: string;
  dispatch: (action: Action) => void;
};

export function Dialogs(props: DialogsType) {
  const arrNames = props.names.map((el) => <Users name={el.name} id={el.id} />);

  const arrMessages = props.messages.map((el) => <Message mes={el.mes} />);

  const addNewText = (e:ChangeEvent<HTMLInputElement>) => {
    props.dispatch(addTextMesActCreator(e.currentTarget.value));
  };

  const addNewMessage = () => {
    props.dispatch(addMesActCreator());
  }

  return (
    <main>
      <input type="text" value={props.textMessage} onChange={addNewText}/>
      <button onClick={addNewMessage}>Add message</button>
        <div className={s.content}>
        <div className={s.content__users}>{arrNames}</div>
        <div className={s.content__messages}>{arrMessages}</div>
      </div>
    </main>
  );
}
