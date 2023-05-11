import React from "react";
import s from "./header.module.css";
import { DataType } from "../redusers/reduсer_login";

type HeaderAPPType = {
  data: DataType;
  resultCode: number;
  logoutOnPageThunk:() => void
};

export function HeaderAPP(props: HeaderAPPType) {
  const { data, resultCode, logoutOnPageThunk } = props;

  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/512px-Circle-icons-gamecontroller.svg.png"
        alt="icons"
      />
      <div className={s.user}>
        {resultCode === 0 ? (
          <>
            <div>Welcome <br /> {data.login}</div>
            <button className={s.bytton}  onClick={() => logoutOnPageThunk()}>
              Out login
            </button>
          </>
        ) : (
          "Login"
        )}
      </div>
    </header>
  );
}
