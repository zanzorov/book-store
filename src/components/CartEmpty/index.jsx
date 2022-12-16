import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./CartEmpty.module.css";
import emptycart from "../../img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div className={styles.section_cart_emprty}>
      <div className={styles.container_cart_empty}>
        <div className={styles.content}>
          <h2 className={styles.heading_secondary}>Корзина пустая</h2>
          <p className={styles.text}>
            Наверное, Вы еще не добавили товары в корзину.
            <br />
            Для этого перейдите на главную страницу.
          </p>
          <img
            src={emptycart}
            className={styles.empty_cart_img}
            alt="Empty Cart"
          />
          <Link to="/" className={styles.back_home_link}>
            <AiOutlineArrowLeft className={styles.icon_arrow} />
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
