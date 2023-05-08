import React from "react";
import styles from "./headmain.module.css";
import { DataPostType } from "../../redusers/reduсer_post";

type HeadmainType = {
  store: DataPostType;
};

export function Headmain(props: HeadmainType) {
  const { store } = props;
  return (
    <div className={styles.container}>
      {!store.profile ? (
        <div className={styles.placeholder}>
          <img
            src="https://public.bnbstatic.com/image/cms/blog/20220329/7c0fb91f-61db-4541-9a33-8b76dde47b36.png"
            alt="play"
            className={styles.placeholderImage}
          />
          <h2 className={styles.placeholderTitle}>No posts yet</h2>
        </div>
      ) : (
        <div className={styles.profile}>
          <div className={styles.profilePhoto}>
            {store.profile.photos.large && (
              <img
                src={store.profile.photos.large}
                alt={store.profile.fullName}
                className={styles.profileImage}
              />
            )}
          </div>
          <div className={styles.profileInfo}>
            <h1 className={styles.profileName}>{store.profile.fullName}</h1>
            <p className={styles.profileAbout}>{store.profile.aboutMe}</p>
            <ul className={styles.profileContacts}>
              {Object.entries(store.profile.contacts).map(([key, value]) => (
                <li key={key} className={styles.profileContactItem}>
                  <a href={value} className={styles.profileContactLink}>
                    {key}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.profileJob}>
              <p className={styles.profileJobTitle}>Looking for a job:</p>
              {store.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {store.profile.lookingForAJob && (
              <div className={styles.profileJobDesc}>
                <p className={styles.profileJobDescTitle}>
                  Job description:
                </p>
                {store.profile.lookingForAJobDescription}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
