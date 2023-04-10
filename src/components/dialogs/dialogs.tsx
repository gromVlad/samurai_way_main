import React from "react";
import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";


export function Dialogs() {

  const names = [
    { name: "Vlad", id: 1 },
    { name: "Alex", id: 2 },
    { name: "Andor", id: 3 },
    { name: "Carl", id: 4 },
    { name: "Jack", id: 5 },
  ];

  const arrNames = names.map((el) => (
    <Users name={el.name} id={el.id} />
  ));

  const messages = [
    { mes: "Hello my name is Vlad" },
    { mes: "What.." },
    { mes: "Hello" },
    { mes: "Hello my name is Vlad" },
    { mes: "my names.." },
  ];

   const arrMessages = messages.map((el) => <Message mes={el.mes} />);

  return (
    <main>
      <div className={s.content}>
        <div className={s.content__users}>
          {arrNames}
        </div>
        <div className={s.content__messages}>
          {arrMessages}
        </div>
      </div>
    </main>
  );
}

type UsersType = {
  name:string,
  id:number
}

const Users = (props:UsersType) => {
  return (
    <div className={s.content__user + " " + s.active}>
      <NavLink to={"/dial/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

type MessageType = {
  mes:string
}

const Message = (props: MessageType) => {
  return <p className={s.content__message}>{props.mes}</p>;
};