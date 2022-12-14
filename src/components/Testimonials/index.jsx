import React from "react";
import styles from "./Testimonials.module.css";

import customer1 from "../../img/customers/customer-1.jpg";
import customer2 from "../../img/customers/customer-2.jpg";
import customer3 from "../../img/customers/customer-3.jpg";
import customer4 from "../../img/customers/customer-4.jpg";

import gallery1 from "../../img/testimonials/gallery_1.jpg";
import gallery2 from "../../img/testimonials/gallery_2.jpg";
import gallery3 from "../../img/testimonials/gallery_3.jpg";
import gallery4 from "../../img/testimonials/gallery_4.jpg";
import gallery5 from "../../img/testimonials/gallery_5.jpg";
import gallery6 from "../../img/testimonials/gallery_6.jpg";
import gallery7 from "../../img/testimonials/gallery_7.jpg";
import gallery8 from "../../img/testimonials/gallery_8.jpg";
import gallery9 from "../../img/testimonials/gallery_9.jpg";
import gallery10 from "../../img/testimonials/gallery_10.jpg";
import gallery11 from "../../img/testimonials/gallery_11.jpg";
import gallery12 from "../../img/testimonials/gallery_12.jpg";

const Testimonials = () => {
  return (
    <section className={styles.section_testimonials} id='testimonials'>
      <div className={styles.testimonials_container}>
        <span className={styles.subheading}>Отзывы</span>
        <h2 className={styles.heading_secondary}>
          Мы любим наших клиентов, а они любят нас
        </h2>

        <div className={styles.testimonials}>
          <figure className={styles.testimonial}>
            <img
              src={customer1}
              className={styles.testimonial_img}
              alt="customer img"
            />
            <blockquote className={styles.testimonial_text}>
              Редко пишу отзывы где-либо, но данный проект настолько хорош,
              что оставлю здесь свой царский лайк!
            </blockquote>
            <p className={styles.testimonial_name}>&mdash; Царь Иван </p>
          </figure>

          <figure className={styles.testimonial}>
            <img
              src={customer2}
              className={styles.testimonial_img}
              alt="customer img"
            />
            <blockquote className={styles.testimonial_text}>
              Из-за работы не удается заглянуть в мои любимые
              книжные магазины, но теперь и не нужно! Все книги здесь.
            </blockquote>
            <p className={styles.testimonial_name}>&mdash; Работяга Маша </p>
          </figure>

          <figure className={styles.testimonial}>
            <img
              src={customer4}
              className={styles.testimonial_img}
              alt="customer img"
            />
            <blockquote className={styles.testimonial_text}>
              Покупать книги теперь намного легче, а главное, приятнее
              благодаря красивому дизайну. Разработчикам респект!
            </blockquote>
            <p className={styles.testimonial_name}>
              &mdash; Ценитель Елизавета
            </p>
          </figure>

          <figure className={styles.testimonial}>
            <img
              src={customer3}
              className={styles.testimonial_img}
              alt="customer img"
            />
            <blockquote className={styles.testimonial_text}>
              Очень практично. Все четко. Уважуха.
            </blockquote>
            <p className={styles.testimonial_name}>&mdash; Четкий Игорь </p>
          </figure>
        </div>
      </div>

      <div className={styles.gallery}>
        <figure className={styles.gallery_item}>
          <img src={gallery12} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery2} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery3} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery4} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery5} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery6} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery7} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery8} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery9} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery10} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery11} alt="gallery img" />
        </figure>
        <figure className={styles.gallery_item}>
          <img src={gallery1} alt="gallery img" />
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;

// className={`${styles.container_testimonials} ${styles.grid} ${styles.grid__4_cols}`}
