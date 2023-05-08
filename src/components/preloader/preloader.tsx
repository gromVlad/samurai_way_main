import React from "react";
import styles from "./preloader.module.css"

 export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__spinner}></div>
    </div>
  );
};

