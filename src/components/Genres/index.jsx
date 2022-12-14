import React from "react";
// import { useState } from "react";
import styles from "./Genres.module.css";

const genres = [
  "Все",
  "Роман",
  "Детектив",
  "Фэнтези",
  "Повесть",
  "Антиутопия",
  "Ужасы",
  "Фантастика",
];

const Genres = ({value, onClickGenre}) => {
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container_genres}>
      <ul className={styles.genres_list}>
        {genres.map((genre, i) => (
          <li
            key={i}
            onClick={() => onClickGenre(i)}
            className={
              value === i ? styles.active_genre : styles.genre_title
            }
          >
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
