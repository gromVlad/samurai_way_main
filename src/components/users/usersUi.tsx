import React from "react";
import { InitState } from "../redusers/reduсer_users";
import { StateType } from "../..";
import styles from "./usersUi.module.css";

type UserUIType = {
  store: StateType;
  followfalse: (id: string) => void;
  followtrue: (id: string) => void;
  addNewState: (store: InitState) => void;
};

export const UserUI = (props: UserUIType) => {
  const { store, followfalse, followtrue, addNewState } = props;

  const users = store.usersPage.users.map((user) => (
    <div className={styles["user-card"]} key={user.id}>
      <img src={user.img} alt={`${user.name} ${user.surname}`} />
      <div className={styles["user-card-info"]}>
        <div
          className={styles["user-card-name"]}
        >{`${user.name} ${user.surname}`}</div>
        <div className={styles["user-card-location"]}>{user.location}</div>
        <div className={styles["user-card-status"]}>{user.status}</div>
        {user.following ? (
          <button
            className={styles["user-card-button"]}
            onClick={() => followfalse(user.id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={styles["user-card-button"]}
            onClick={() => followtrue(user.id)}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  ));

  return <div className={styles["users-container"]}>{users}</div>;
};
