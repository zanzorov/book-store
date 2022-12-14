import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGenreId } from "../../redux/slices/filterSlice";
import axios from "axios";

import Genres from "../Genres";
import Book from "../Book";
import Skeleton from "../Book/Skeleton";
import Search from "../Search";

import styles from "./Catalog.module.css";

const Catalog = () => {
  const genreId = useSelector((state) => state.filter.genreId);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const onChangeGenre = (i) => {
    dispatch(setGenreId(i));
  };

  useEffect(() => {
    setIsLoading(true);
    const genre = genreId > 0 ? `genreId=${genreId}` : "";
    // const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(`https://63923e75b750c8d178da7a38.mockapi.io/items?${genre}`)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [genreId]);

  return (
    <section className={styles.section_catalog} id="catalog">
      <div className={styles.container_heading}>
        <span className={styles.subheading}>Каталог</span>
        <h2 className={styles.heading_secondary}>Выбирай из 1000+ книг</h2>
      </div>

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <Genres value={genreId} onClickGenre={onChangeGenre} />

      <div className={styles.container_grid}>
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj) => {
                if (
                  obj.title.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return true;
                }
                return false;
              })
              .map((obj) => <Book key={obj.id} {...obj} />)}
      </div>
    </section>
  );
};

export default Catalog;

// {...obj}
// same as:
// imageUrl={obj.imageUrl}
// genre={obj.genre}
// title={obj.title}
// author={obj.author}
// price={obj.price}

// fetch(`https://63923e75b750c8d178da7a38.mockapi.io/items?${genre}`)
//   .then((res) => res.json())
//   .then((arr) => {
//     setItems(arr);
//     setIsLoading(false);
//   });

// window.scrollTo(0, 0);
