import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

import { AiOutlineShoppingCart } from "react-icons/ai";

import styles from "./Book.module.css";

const style = {
  color: "#fff",
  width: "2rem",
  height: "2rem",
};

const Book = ({ id, imageUrl, genre, title, author, price }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  let cutTitle = "";
  if (title.length > 22) {
    cutTitle = `${title.slice(0, 19)}...`;
  } else {
    cutTitle = title;
  }

  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      title,
      author,
      price,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.book_card}>
      <div className={styles.book_img_box}>
        <img src={imageUrl} className={styles.book_img} alt="Great Gatsby" />
      </div>

      <div className={styles.book_content}>
        <span className={styles.tag_genre}>{genre}</span>
        <p className={styles.book_title}>{cutTitle}</p>
        <p className={styles.book_author}>{author}</p>
        <div className={styles.price_and_btn}>
          <span className={styles.book_price}>{price} &#8381;</span>
          <button onClick={onClickAdd} className={styles.btn}>
            Добавить
            <span>
              <AiOutlineShoppingCart style={style} />
            </span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
