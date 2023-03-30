import React from "react";
import s from "./nav.module.css";

export function NavigationAPP () {
  return (
    <nav className={s.nav}>
      <div>Profile</div>
      <div>Message</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </nav>
  );
}
