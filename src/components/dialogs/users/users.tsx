import React from "react";
import s from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";


type UsersType = {
  name: string;
  id: number;
};

export const Users = (props: UsersType) => {
  return (
    <div className={s.content__user + " " + s.active}>
      <NavLink to={"/dial/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

