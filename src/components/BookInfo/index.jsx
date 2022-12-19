import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { addItem } from "../../redux/slices/cartSlice";

import styles from "./BookInfo.module.css";

const BookInfo = () => {
  const [book, setBook] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(
          "https://63923e75b750c8d178da7a38.mockapi.io/items/" + id
        );
        setBook(data);
      } catch (error) {
        alert("Ошибка при получении книги!");
      }
    }

    fetchBook();
  }, [id]);

  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = { ...book };
    dispatch(addItem(item));
  };

  if (!book) {
    return "Loading...";
  }

  return (
    <div className={styles.section_book_info}>
      <div className={styles.container_book_info}>
        <div className={styles.content}>
          <div className={styles.img_box}>
            <img src={book.imageUrl} alt="book img" />
          </div>

          <div className={styles.book_details}>
            <h2 className={styles.heading_title}>{book.title}</h2>
            <p className={styles.heading_author}>{book.author}</p>

            <div className={styles.annotation}>
              <h3>Аннотация</h3>
              <p>{book.description}</p>
            </div>

            <table className={styles.book__props}>
              <tbody>
                <tr className={styles.book_prop}>
                  <td>Жанр:</td>
                  <td>{book.genre}</td>
                </tr>
                <tr className={styles.book_prop}>
                  <td>Переплет:</td>
                  <td>{book.cover}</td>
                </tr>
                <tr className={styles.book_prop}>
                  <td>Страниц:</td>
                  <td>{book.pages}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.buy_now}>
            <div className={styles.book_price}>{book.price} ₽</div>
            <button
              disabled={book.left ? false : true}
              onClick={onClickAdd}
              className={book.left ? styles.btn : styles.btn_disabled}
            >
              {book.left ? "Добавить" : "Нет в наличии"}
              <span>
                <AiOutlineShoppingCart size="2rem" color="#fff" />
              </span>
              {addedCount > 0 && <i>{addedCount}</i>}
            </button>
            <div className={styles.seller}>
              <span>Продавец</span>
              <p className={styles.seller_name}>{book.seller}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
