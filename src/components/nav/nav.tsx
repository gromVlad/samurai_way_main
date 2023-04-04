import React from "react";
import s from "./nav.module.css";

export function NavigationAPP() {
  return (
    <nav className={s.nav}>
      <div>
        {/* add href (path) */}
        <a href="/prof">Profile</a>
      </div>
      <div>
        {/* add href (path) */}
        <a href="/dial">Message</a>
      </div>
      <div>
        <a href="">News</a>
      </div>
      <div>
        <a href="">Music</a>
      </div>
      <div>
        <a href="">Music</a>
      </div>
    </nav>
  );
}
