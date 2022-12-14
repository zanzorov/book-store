import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import styles from "./CartItem.module.css";

const CartItem = ({ id, imageUrl, title, author, price, count }) => {
  const dispatch = useDispatch();

  const onClickPLus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Уверены, что хотите удалить?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.item_img}>
        <img src={imageUrl} className={styles.book_img} alt="Book" />
      </div>
      <div className={styles.item_info}>
        <p className={styles.book_title}>{title}</p>
        <p className={styles.author}>{author}</p>
      </div>
      <div className={styles.item_count}>
        <AiOutlineMinusCircle
          onClick={onClickMinus}
          className={styles.minus}
          size="3.2rem"
        />
        <span>{count}</span>
        <AiOutlinePlusCircle
          onClick={onClickPLus}
          className={styles.plus}
          size="3.2rem"
        />
      </div>
      <div className={styles.item_price}>
        <span>{price * count} &#8381;</span>
      </div>
      <div onClick={onClickRemove} className={styles.item_remove}>remove</div>
    </div>
  );
};

export default CartItem;
