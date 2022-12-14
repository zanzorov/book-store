import React from "react";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={styles.section_cta} id='cta'>
      <div className={styles.container}>
        <div className={styles.cta}>
          <div className={styles.cta_text_box}>
            <h2 className={styles.heading_secondary}>Первая книга бесплатно</h2>
            <p className={styles.cta_text}>
              Захватывающие, интересные и познватаельные книги ждут тебя. Начни
              приключение уже сегодня. Первая книга за наш счет!
            </p>

            <form className={styles.cta_form}>
              <div>
                <label htmlFor="full-name">Полное имя</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Электронная почта</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">Где ты услышал о нас?</label>
                <select id="select-where" required>
                  <option value="">Выбери один из вариантов:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Другое</option>
                </select>
              </div>

              <button className={styles.btn}>Sign up now</button>
            </form>
          </div>
          <div
            className={styles.cta_img_box}
            role="img"
            aria-label="library img"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
