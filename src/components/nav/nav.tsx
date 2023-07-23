import React from "react";
import s from "./nav.module.css";
import { NavLink } from "react-router-dom";
import { StateType } from "../redusers/redux-store";


type NavigationAPPType = {
  store:StateType
};

export function NavigationAPP(props: NavigationAPPType) {

  const friends = props.store.sidebar.map((el: any) => <p key={el}>{el} </p>)

  return (
    <nav className={s.nav}>
      <div>
        {/* add href (path) */}
        <NavLink to="/prof" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div>
        {/* add href (path) */}
        <NavLink to="/dial" activeClassName={s.active}>
          Message
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/user" activeClassName={s.active}>
          Users
        </NavLink>
      </div>
      <div>
        <h3>Friends</h3>
        {friends}
      </div>
    </nav>
  );
}
