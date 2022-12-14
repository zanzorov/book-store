import { React, useRef } from "react";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import styles from "./Search.module.css";

const Search = ({ searchValue, setSearchValue }) => {
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.container_search}>
      <div className={styles.search_box}>
        <AiOutlineSearch className={styles.icon_search} />
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className={styles.search_input}
          type="text"
          placeholder="Название книги..."
        />
        {searchValue && (
          <AiOutlineClose
            onClick={onClickClear}
            className={styles.icon_close}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
