import React from "react";
import s from "./header.module.css";

export function HeaderAPP() {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/512px-Circle-icons-gamecontroller.svg.png"
        alt="icons"
      />
    </header>
  );
}

//also print with two and more class --> className = { "${s.header} ${s.nextClass}"}
