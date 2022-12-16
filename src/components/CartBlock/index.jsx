import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../redux/slices/cartSlice";

import { AiOutlineDelete, AiOutlineArrowLeft } from "react-icons/ai";

import CartItem from "../CartItem";
import CartEmpty from "../CartEmpty";

import styles from "./CartBlock.module.css";


const CartBlock = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.section_cart}>
      <div className={styles.container_cart}>
        <div className={styles.cart}>
          <div className={styles.cart_header}>
            <h2 className={styles.heading_secondary}>Корзина</h2>
            <div className={styles.clear_box} onClick={onClickClear}>
              <AiOutlineDelete size="3.6rem" className={styles.clear_icon} />
            </div>
          </div>

          <div className={styles.cart_items}>
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <div className={styles.cart_bottom}>
            <div className={styles.cart_bottom__details}>
              <span className={styles.total_count}>
                Всего книг: {totalCount} шт.
              </span>
              <span className={styles.total_price}>
                Сумма заказа: {totalPrice} &#8381;
              </span>
            </div>
            <div className={styles.cart_bottom__buttons}>
              <Link to="/" className={styles.back_home_link}>
                <AiOutlineArrowLeft className={styles.icon_arrow} />
                <span>Вернуться назад</span>
              </Link>
              <button className={styles.btn}>Оплатить сейчас</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBlock;
