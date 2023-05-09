import styles from "./usersUi.module.css";
import { InitState } from "../redusers/reduсer_users";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { userAPI } from "../dalAPI/apiAxios";

type UserUIType = {
  store: InitState;
  AddNewCurrentPage: (page: number) => void;
  followtrue: (id: number) => void;
  followfalse: (id: number) => void;
  actionIsProgressFollow:(isProgressFollow: boolean,id:number) => void
};

export const UserUI = (props: UserUIType) => {
  const { store, followfalse, followtrue, AddNewCurrentPage,actionIsProgressFollow } = props;

  const followfalseUi = (id: number) => {
    followfalse(id);
  };

  const followtrueUi = (id: number) => {
    followtrue(id);
  };

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
  };
  const newCountpage = funCalcCountAndPage();

  return (
    <>
      {/* number page  */}
      {newCountpage
        .slice(
          store.currentPage - 10 <= 0 ? 1 : store.currentPage - 5,
          store.currentPage - 10 <= 0 ? 12 : store.currentPage + 5
        )
        .map((el, index) => (
          <span
            key={index}
            onClick={() => AddNewCurrentPage(el)}
            className={store.currentPage === el ? styles.active : ""}
          >
            {el}
          </span>
        ))}
      . . .
      <div className={styles["users-container"]}>
        {store.items.map((user) => (
          <div className={styles["user-card"]} key={user.id}>
            <NavLink to={`/prof/${user.id}`}>
              <img
                src={
                  user.photos.small ||
                  "https://kartinkin.net/uploads/posts/2021-07/1625791697_35-kartinkin-com-p-anime-patsan-v-maske-anime-krasivo-35.jpg"
                }
                alt={`${user.name}`}
              />
            </NavLink>
            <div className={styles["user-card-info"]}>
              <div className={styles["user-card-name"]}>{`${user.name}`}</div>
              <div className={styles["user-card-status"]}>{user.status}</div>
              {user.followed ? (
                <button
                  disabled={store.isprogressFollow.some((el) => el === user.id)}
                  className={styles["user-card-button"]}
                  onClick={() => {
                    actionIsProgressFollow(true, user.id);
                    userAPI.deleteUser(user.id).then((data) => {
                      if (data.resultCode === 0) {
                        followfalseUi(user.id);
                      }
                      actionIsProgressFollow(false, user.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={store.isprogressFollow.some((el) => el === user.id)}
                  className={styles["user-card-button"]}
                  onClick={() => {
                    actionIsProgressFollow(true, user.id);
                    userAPI.addfollow(user.id).then((data) => {
                      if (data.resultCode === 0) {
                        followtrueUi(user.id);
                      }
                      actionIsProgressFollow(false, user.id);
                    });
                  }}
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

