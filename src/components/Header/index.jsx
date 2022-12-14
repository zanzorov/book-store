import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";

import { useSelector } from "react-redux";

import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import styles from "./Header.module.css";

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const [fix, setFix] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  function handleFix() {
    if (window.scrollY >= 720) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  function handleMobileNav() {
    setMobileNav(!mobileNav);
  }

  window.addEventListener("scroll", handleFix);

  let style = "";

  if (fix && mobileNav) {
    style = `${styles.header} ${styles.fixed} ${styles.nav_open}`;
  } else if (fix) {
    style = `${styles.header} ${styles.fixed}`;
  } else if (mobileNav) {
    style = `${styles.header} ${styles.nav_open}`;
  } else {
    style = styles.header;
  }

  return (
    <header className={style}>
      <Link to="/" className={styles.logo_link} href="/">
        <span className={styles.logo}>
          🦉AISHA<span>&</span>BOOKS
        </span>
      </Link>

      <nav className={styles.main_nav}>
        <ul className={styles.main_nav_list}>
          <li>
            <ScrollLink
              to="howitworks"
              spy={true}
              smooth={true}
              offset={-48}
              duration={500}
              className={styles.main_nav_link}
              href="howitworks"
              onClick={() => handleMobileNav()}
            >
              Как это работает
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="catalog"
              spy={true}
              smooth={true}
              offset={-16}
              duration={500}
              className={styles.main_nav_link}
              href="catalog"
              onClick={() => handleMobileNav()}
            >
              Все книги
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-57}
              duration={500}
              className={styles.main_nav_link}
              href="testimonials"
              onClick={() => handleMobileNav()}
            >
              Отзывы
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contacts"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={styles.main_nav_link}
              href="contacts"
              onClick={() => handleMobileNav()}
            >
              Контакты
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="cta"
              spy={true}
              smooth={true}
              offset={-48}
              duration={500}
              className={`${styles.main_nav_link} ${styles.nav_cta}`}
              href="cta"
              onClick={() => handleMobileNav()}
            >
              Дарим книгу
            </ScrollLink>
          </li>
        </ul>
      </nav>

      <Link to="cart" className={styles.shopping_cart}>
        <span>{totalPrice} &#8381;</span>
        <div className={styles.icon_and_amount}>
          <AiOutlineShoppingCart color="#fff" size="2.4rem" />
          <span>{totalCount}</span>
        </div>
      </Link>

      <button
        onClick={() => handleMobileNav()}
        className={styles.btn_mobile_nav}
      >
        <span className={styles.icon_mobile_nav}>
          <AiOutlineMenu name="menu-outline" size="4.8rem" />
        </span>
        <span className={styles.icon_mobile_nav}>
          <AiOutlineClose name="close-outline" size="4.8rem" />
        </span>
      </button>
    </header>
  );
};

export default Header;

// add and remove class nav_open to header tag ${styles.nav_open}
// `${styles.header}`
// className={mobileNav ? `${styles.header} ${styles.nav_open}` : styles.header }

// works but only on top of website
// className={fix ? `${styles.header} ${styles.fixed}` : mobileNav ? `${styles.header} ${styles.nav_open}` : styles.header}
