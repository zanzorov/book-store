import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.container_grid__5_cols}>
        <div className={styles.logo_col}>
          <Link to="/" className={styles.logo_link} href="/">
            <span className={styles.logo}>
              🦉AISHA<span>&</span>BOOKS
            </span>
          </Link>

          <ul className={styles.social_links}>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                <BsInstagram size="2.4rem" />
              </a>
            </li>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                <BsFacebook size="2.4rem" />
              </a>
            </li>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                <BsTwitter size="2.4rem" />
              </a>
            </li>
          </ul>

          <p className={styles.copyright}>
            Copyright &copy; 2022 by Aisha&Books, Inc. All rights reserved.
          </p>
        </div>

        <div className={styles.address_col}>
          <p className={styles.footer_heading}>Контакты</p>
          <address className={styles.contacts}>
            <p className={styles.address}>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className={styles.footer_link} href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a
                className={styles.footer_link}
                href="mailto:hello@omnifood.com"
              >
                hello@aishabooks.com
              </a>
            </p>
          </address>
        </div>

        <nav className={styles.nav_col}>
          <p className={styles.footer_heading}>Аккаунт</p>
          <ul className={styles.footer_nav}>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                Create account
              </a>
            </li>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                iOS app
              </a>
            </li>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav_col}>
          <p className={styles.footer_heading}>Компания</p>
          <ul className={styles.footer_nav}>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                About Aisha&Books
              </a>
            </li>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                For Business
              </a>
            </li>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav_col}>
          <p className={styles.footer_heading}>Ресурсы</p>
          <ul className={styles.footer_nav}>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                Books directory
              </a>
            </li>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                Help center
              </a>
            </li>
            <li>
              <a
                className={styles.footer_link}
                href="https://ru.wikipedia.org/"
              >
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
