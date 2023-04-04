import React from "react";
import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";


export function Dialogs() {
  return (
    <main>
      <div className={s.content}>
        <div className={s.content__users}>
          <Users name={"Vlad"} id={1} />
          <Users name={"Alex"} id={2} />
          <Users name={"Andor"} id={3} />
          <Users name={"Carl"} id={4} />
          <Users name={"Jack"} id={5} />
        </div>
        <div className={s.content__messages}>
          <Message mes={"Hello my name is Vlad"} />
          <Message mes={"What.."} />
          <Message mes={"Hello"} />
          <Message mes={"Hello my name is Vlad"} />
          <Message mes={"my names.."} />
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