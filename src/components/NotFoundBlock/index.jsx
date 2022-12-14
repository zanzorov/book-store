import React from "react";
import styles from "./NotFoundBlock.module.css";

const NotFoundBlock = () => {
  return (
    <div className={styles.section_notfound}>
      <div className={styles.container_notfound}>
        <span className={styles.emoji}>😥</span>
        <p className={styles.text}>Ничего не найдено</p>
        <p className={styles.error}>404</p>
      </div>
    </div>
  );
};

export default NotFoundBlock;
