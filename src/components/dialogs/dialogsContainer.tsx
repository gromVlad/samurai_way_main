import React, { ChangeEvent, useState } from "react";
import s from "./dialogs.module.css";
import { Message } from "./message/message";
import { Users } from "./users/users";
import { Action } from "../../data";
import { addMesActCreator, addTextMesActCreator } from "../redusers/reduсer.messages";
import { StateType } from "../..";
import { Name } from "../redusers/reduсer_name";
import { Dialogs } from "./dialogs";

type DialogsType = {
  store: StateType;
  dispatch: (action: any) => void;
};

export function DialogsContainer (props: DialogsType) {
  
  const addNewText = (text:string) => {
    props.dispatch(addTextMesActCreator(text));
  };

  const addNewMessage = () => {
    props.dispatch(addMesActCreator());
  }

  return (
    <Dialogs
      store={props.store}
      addNewText={addNewText}
      addNewMessage={addNewMessage}
    />
  );
}
