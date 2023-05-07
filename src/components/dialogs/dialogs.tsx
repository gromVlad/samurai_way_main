import React, { ChangeEvent, useState } from "react";
import s from "./dialogs.module.css";
import { Message } from "./message/message";
import { Users } from "./users/users";
import { StateType } from "../redusers/redux-store";

type DialogsType = {
  store: StateType;
  addNewText: (text: string) => void;
  addNewMessage: () => void;
};

export function Dialogs(props: DialogsType) {
  const arrNames = props.store.names.map((el) => <Users name={el.name} id={el.id} />);

  const arrMessages = props.store.mesOBJ.messages.map((el:any) => <Message mes={el.mes} />);

  const addNewText = (e:ChangeEvent<HTMLInputElement>) => {
    props.addNewText(e.currentTarget.value);
  };

  const addNewMessage = () => {
    props.addNewMessage();
  }

  return (
    <main>
      <input
        type="text"
        value={props.store.mesOBJ.textMessage}
        onChange={addNewText}
      />
      <button onClick={addNewMessage}>Add message</button>
      <div className={s.content}>
        <div className={s.content__users}>{arrNames}</div>
        <div className={s.content__messages}>{arrMessages}</div>
      </div>
    </main>
  );
}
