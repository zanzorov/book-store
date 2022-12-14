import React from "react";
import styles from "./Feature.module.css";

import { AiOutlineGift } from "react-icons/ai";
import { AiOutlineSafety } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const style = {
  boxSizing: "content-box",
  color: "#e67e22",
  backgroundColor: "#fdf2e9",
  width: "2.4rem",
  height: "2.4rem",
  padding: "1.2rem",
  borderRadius: "50%",
};

const Feature = () => {
  return (
    <section className={styles.section_features}>
      <div className={styles.container}>
        <div className={styles.feature_box}>
          <AiOutlineGift style={style} />
          <p className={styles.feature_title}>
            Доставка бесплатно <br />
            <span>заказ свыше 500р.</span>
          </p>
        </div>
        <div className={styles.feature_box}>
          <AiOutlineSafety style={style} />
          <p className={styles.feature_title}>
            Безопасная оплата <br />
            <span>100% защита</span>
          </p>
        </div>
        <div className={styles.feature_box}>
          <AiOutlineReload style={style} />
          <p className={styles.feature_title}>
            Легкий возврат <br />
            <span>срок 10 дней</span>
          </p>
        </div>
        <div className={styles.feature_box}>
          <AiOutlinePhone style={style} />
          <p className={styles.feature_title}>
            Поддержка 24/7 <br />
            <span>звоните в любое время</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
