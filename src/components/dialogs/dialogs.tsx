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

  const messages = [
    { mes: "Hello my name is Vlad" },
    { mes: "What.." },
    { mes: "Hello" },
    { mes: "Hello my name is Vlad" },
    { mes: "my names.." },
  ];

  return (
    <main>
      <div className={s.content}>
        <div className={s.content__users}>
          <Users name={names[0].name} id={names[0].id} />
          <Users name={names[1].name} id={names[1].id} />
          <Users name={names[2].name} id={names[2].id} />
          <Users name={names[3].name} id={names[3].id} />
          <Users name={names[4].name} id={names[4].id} />
          
        </div>
        <div className={s.content__messages}>
          <Message mes={messages[0].mes} />
          <Message mes={messages[1].mes} />
          <Message mes={messages[2].mes} />
          <Message mes={messages[3].mes} />
          <Message mes={messages[4].mes} />
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