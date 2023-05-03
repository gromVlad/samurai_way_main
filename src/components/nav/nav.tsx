import React from "react";
import s from "./nav.module.css";
import { NavLink } from "react-router-dom";


type NavigationAPPType = {
  // sidebar: Array<string>;
  store:any
};

export function NavigationAPP(props: NavigationAPPType) {

  const friends = props.store.sidebar.map((el:any) => <p>{el} </p>)

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
        <div>
          <h3>Friends</h3>
          {friends}
        </div>
      </div>
    </nav>
  );
}
