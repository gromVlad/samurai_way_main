import React from "react";
import s from "./nav.module.css";
import { NavLink } from "react-router-dom";

export function NavigationAPP() {
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
    </nav>
  );
}
