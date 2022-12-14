import React from "react";
import styles from "./SectionHow.module.css";

import stepimg1 from "../../img/steps/catalog.jpg";
import stepimg2 from "../../img/steps/review.jpg";
import stepimg3 from "../../img/steps/favorite.jpg";


const SectionHow = () => {
  return (
    <section className={styles.section_how} id='howitworks'>
      <div className={styles.container_heading}>
        <span className={styles.subheading}>Как это работает</span>
        <h2 className={styles.heading_secondary}>
          Небольшой гайд по нашему сайту
        </h2>
      </div>

      <div
        className={styles.container}
      >
        {/* ---STEP 01--- */}
        <div className={styles.step_text_box}>
          <p className={styles.step_number}>01</p>
          <h3 className={styles.heading_tertiary}>
            Выбирай из множества книг в удобном каталоге
          </h3>
          <p className={styles.step_description}>
            Еще не решил, какую книгу прочесть? В нашем каталоге ты найдешь
            тысячи книг на любой вкус. Также есть возможность сортировки по
            жанрам и даже поиска по назаванию книги!
          </p>
        </div>
        <div className={styles.step_img_box}>
          <img src={stepimg1} className={styles.step_img} alt="catalog img" />
        </div>

        {/* ---STEP 02--- */}
        <div className={styles.step_img_box}>
          <img src={stepimg2} className={styles.step_img} alt="review img" />
        </div>
        <div className={styles.step_text_box}>
          <p className={styles.step_number}>02</p>
          <h3 className={styles.heading_tertiary}>
            Читай отзывы других покупателей
          </h3>
          <p className={styles.step_description}>
            Наши пользователи имеют возможность оставлять отзывы под каждой
            книгой и оценивать звездочками. Не забудь и ты написать отзыв,
            который будет полезен кому-то при трудном порой выборе книги.
          </p>
        </div>

        {/* ---STEP 03--- */}
        <div className={styles.step_text_box}>
          <p className={styles.step_number}>03</p>
          <h3 className={styles.heading_tertiary}>
            Добавляй книги в избранные
          </h3>
          <p className={styles.step_description}>
            Наткнулся на интресную книгу и не хочешь потерять ее из виду? Спешим
            обрадовать, что у нас есть решение - сохрани данную книгу в
            избранных для быстрого доступа в личном кабинете.
          </p>
        </div>
        <div className={styles.step_img_box}>
          <img src={stepimg3} className={styles.step_img} alt="favorite img" />
        </div>
      </div>
    </section>
  );
};

export default SectionHow;

// className={`${styles.container} ${styles.grid} ${styles.grid__2_cols}`}
