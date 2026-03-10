import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const [hidenav, setHidenav] = useState("navClose");
  const toggleNav = () => {
    setHidenav((prev) => (prev === "navOpen" ? "navClose" : "navOpen"));
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src="./images/navbar/logo.png" alt="logo" />
        </Link>
      </div>
      <div className={styles.links}>
        <div>
          <Link to={"/services"} className={styles.normalLink}>
            產品服務
          </Link>
        </div>
        <div>
          <Link to={"/contact"} className={styles.buttonLink}>
            <img src="./images/navbar/mail_icon.svg" alt="mail-icon" />
            <img
              className={styles.hoveractive}
              src="./images/navbar/mail_icon_hover.svg"
              alt="mail-icon"
            />
            <div className={styles.linkText}>聯絡我們</div>
          </Link>
        </div>
      </div>
      <div
        className={`${styles.hidenav} ${hidenav === "navOpen" ? styles.active : ""}`}
      >
        <div className={styles.linkContainer}>
          <Link
            onClick={toggleNav}
            to={"/services"}
            className={styles.normalLink}
          >
            產品服務
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link
            onClick={toggleNav}
            to={"/contact"}
            className={styles.buttonLink}
          >
            <img src="./images/navbar/mail_icon.svg" alt="mail-icon" />
            <img
              className={styles.hoveractive}
              src="./images/navbar/mail_icon_hover.svg"
              alt="mail-icon"
            />
            <div className={styles.linkText}>聯絡我們</div>
          </Link>
        </div>
        <div className={styles.community}>
          <div className={styles.btn}>
            <a href="mailto:ap.public@ancillarypower.com" onClick={toggleNav}>
              <img src="./images/footer/mail.svg" alt="mail" />
            </a>
          </div>
          <div className={styles.btn}>
            <a
              href="https://www.facebook.com/profile.php?id=61570255175341&locale=zh_TW"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleNav}
            >
              <img src="./images/footer/facebook.svg" alt="facebook" />
            </a>
          </div>
          <div className={styles.btn}>
            <a
              href="https://user201254.pse.is/7u4vlz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleNav}
            >
              <img src="./images/footer/Instagram.svg" alt="instagram" />
            </a>
          </div>
          <div className={styles.btn}>
            <a
              href="https://user201254.pse.is/7u4w7s"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleNav}
            >
              <img src="./images/footer/youtube.svg" alt="youtube" />
            </a>
          </div>
          <div className={styles.btn}>
            <a
              href="https://lin.ee/W8Xa4U3"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleNav}
            >
              <img src="./images/footer/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <button onClick={toggleNav} className={styles.hideNavBtn}>
        <span
          className={`${styles.first} ${hidenav === "navOpen" ? styles.active : ""}`}
        ></span>
        <span
          className={`${styles.second} ${hidenav === "navOpen" ? styles.active : ""}`}
        ></span>
      </button>
    </nav>
  );
};

export default Navbar;
