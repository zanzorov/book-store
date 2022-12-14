import React from "react";
import { useState } from "react";

import { Link as ScrollLink } from "react-scroll";

import styles from "./Hero.module.css";
import heroimg from "../../img/hero-20percent.png";
import customer1 from "../../img/customers/customer-1.jpg";
import customer2 from "../../img/customers/customer-2.jpg";
import customer3 from "../../img/customers/customer-3.jpg";
import customer4 from "../../img/customers/customer-4.jpg";
import customer5 from "../../img/customers/customer-5.jpg";
import customer6 from "../../img/customers/customer-6.jpg";

const Hero = () => {
  const [fix, setFix] = useState(false);

  function handleFix() {
    if (window.scrollY >= 720) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", handleFix);

  return (
    <section
      className={
        fix
          ? `${styles.section_hero} ${styles.section_hero_mt}`
          : styles.section_hero
      }
      id="/"
    >
      <div className={styles.hero}>
        <div className={styles.hero_text_box}>
          <h1 className={styles.heading_primary}>
            Мы поможем найти твою следующую любимую книгу
          </h1>
          <p className={styles.hero_description}>
            Огромный выбор - от классики до мировых бестселлеров наших дней. Не
            знаешь, какую книгу прочесть следующей? Воспользуйся нашим каталогом
            ниже.
          </p>
          <ScrollLink
            to="cta"
            spy={true}
            smooth={true}
            offset={-48}
            duration={500}
            href="cta"
            className={`${styles.btn} ${styles.btn__full} ${styles.margin_right_sm}`}
          >
            Напиши нам
          </ScrollLink>
          <ScrollLink
            to="catalog"
            spy={true}
            smooth={true}
            offset={128}
            duration={500}
            href="catalog"
            className={`${styles.btn} ${styles.btn__outline}`}
          >
            Каталог ⬇
          </ScrollLink>
          <div className={styles.sold_books}>
            <div className={styles.sold_imgs}>
              <img src={customer1} alt="customer img" />
              <img src={customer2} alt="customer img" />
              <img src={customer3} alt="customer img" />
              <img src={customer4} alt="customer img" />
              <img src={customer5} alt="customer img" />
              <img src={customer6} alt="customer img" />
            </div>
            <p className={styles.sold_text}>
              <span>25,000+</span> продаж за прошлый год!
            </p>
          </div>
        </div>
        <div className={styles.hero_img_box}>
          <img
            src={heroimg}
            className={styles.hero_img}
            alt="three books cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
