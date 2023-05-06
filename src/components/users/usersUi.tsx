import React, { Component, useEffect } from "react";
import { InitState } from "../redusers/reduсer_users";
import { StateType } from "../..";
import styles from "./usersUi.module.css";
import axios from "axios";

type UserUIType = {
  store: InitState;
  followfalse: (id: number) => void;
  followtrue: (id: number) => void;
  addNewState: (st: InitState) => void;
  addNewpage:(page:number) => void
};

export const UserUI = (props: UserUIType) => {
  const { store, followfalse, followtrue, addNewState, addNewpage } = props;
  

  const followfalseUi = (id: number) => {
    followfalse(id);
  };

  const followtrueUi = (id: number) => {
    followtrue(id);
  };

  //first load on page
  useEffect(()=>{
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${store.currentPage}&count=${store.pageNumber}`)
      .then((user) => addNewState(user.data));
  },[])

  //calc page
  const funCalcCountAndPage = () => {
    let newCountpage = [];
    //calc page
    let countpageS = Math.ceil(store.totalCount / store.pageNumber);

    //create new arr for page
    for (let i = 0; i <= countpageS; i++) {
     newCountpage.push(i);
    }
    return newCountpage;
  }
  const newCountpage = funCalcCountAndPage()

  //fun add new current page
  const AddNewCurrentPage = (page:number) => {
    addNewpage(page)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${store.pageNumber}`
      )
      .then((user) => addNewState(user.data));
  }
  

  return (
      <>
        {/* number page  */}
        {newCountpage
          .slice(
            store.currentPage - 1 <= 0
              ? store.currentPage
              : store.currentPage - 1,
            store.currentPage - 1 <= 0
              ? store.currentPage + 10
              : store.currentPage + 9
          )
          .map((el, index) => (
            <span
              key={index}
              onClick={() => AddNewCurrentPage(el)}
              className={store.currentPage === el ? styles.active : ""}
            >
              {" "}
              {el}{" "}
            </span>
          ))}
        . . .
        <div className={styles["users-container"]}>
          {store.items.map((user) => (
            <div className={styles["user-card"]} key={user.id}>
              <img
                src={
                  user.photos.small ||
                  "https://kartinkin.net/uploads/posts/2021-07/1625791697_35-kartinkin-com-p-anime-patsan-v-maske-anime-krasivo-35.jpg"
                }
                alt={`${user.name}`}
              />
              <div className={styles["user-card-info"]}>
                <div className={styles["user-card-name"]}>{`${user.name}`}</div>
                <div className={styles["user-card-status"]}>{user.status}</div>
                {user.followed ? (
                  <button
                    className={styles["user-card-button"]}
                    onClick={() => followfalseUi(user.id)}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={styles["user-card-button"]}
                    onClick={() => followtrueUi(user.id)}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
};
