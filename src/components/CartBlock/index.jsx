import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../redux/slices/cartSlice";

import { AiOutlineDelete } from "react-icons/ai";

import CartItem from "../CartItem";

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

  return (
    <div className={styles.section_cart}>
      <div className={styles.container_cart}>
        <div className={styles.cart}>
          <div className={styles.cart_header}>
            <h2>Корзина</h2>
            <span onClick={onClickClear}>
              <AiOutlineDelete />
              Очистить корзину
            </span>
          </div>

          <div className={styles.cart_items}>
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <div className={styles.cart_bottom}>
            <div className={styles.cart_bottom__details}>
              <span>Всего книг: {totalCount} шт.</span>
              <span>Сумма заказа: {totalPrice} &#8381;</span>
            </div>
            <div className={styles.cart_bottom__buttons}>
              <Link to="/" className={styles.back_home_link}>
                <span>Вернуться назад</span>
              </Link>
              <div className={styles.pay_now_btn}>
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBlock;
