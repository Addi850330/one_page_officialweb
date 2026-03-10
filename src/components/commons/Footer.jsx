import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className={styles.logo}>
        <div>
          <Link>
            <img src="./images/navbar/logo.png" alt="logo" />
          </Link>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.officeinfo}>
          <div className={styles.telephone}>
            (02) 2727-2988 、(02) 7755-5030
          </div>
          <div>100510台北市中正區新生南路一段50號4樓之5</div>
        </div>
        <div className={styles.community}>
          <div className={styles.btn}>
            <a href="mailto:ap.public@ancillarypower.com">
              <img src="./images/footer/mail.svg" alt="mail" />
            </a>
          </div>
          <div className={styles.btn}>
            <a
              href="https://www.facebook.com/profile.php?id=61570255175341&locale=zh_TW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/footer/facebook.svg" alt="facebook" />
            </a>
          </div>
          <div className={styles.btn}>
            <a
              href="https://user201254.pse.is/7u4vlz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/footer/Instagram.svg" alt="instagram" />
            </a>
          </div>
          <div className={styles.btn}>
            <a
              href="https://user201254.pse.is/7u4w7s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/footer/youtube.svg" alt="youtube" />
            </a>
          </div>
          <div className={styles.btn}>
            <a
              href="https://lin.ee/W8Xa4U3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/footer/line.svg" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div>© Copyright 2022</div>
        <div>Ancillary Power Co., Ltd.</div>
        <div>
          <a
            href="https://www.ancillarypower.com/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            隱私權政策
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
