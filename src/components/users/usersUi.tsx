import styles from "./usersUi.module.css";
import { InitState } from "../redusers/reduсer_users";
import { NavLink } from "react-router-dom";
type UserUIType = {
  store: InitState;
  AddNewCurrentPage: (page: number) => void;
  followUsersThunk: (id: number) => void;
  unfollowUsersThunk: (id: number) => void;
};


export const UserUI = (props: UserUIType) => {
  const { store, AddNewCurrentPage, followUsersThunk, unfollowUsersThunk } =
    props;

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
    <div className={styles.boxSpan}>
      {store.currentPage > 10 ? ". . .  " : " "}
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
      </div>
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
                    unfollowUsersThunk(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={store.isprogressFollow.some((el) => el === user.id)}
                  className={styles["user-card-button"]}
                  onClick={() => {
                    followUsersThunk(user.id);
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

