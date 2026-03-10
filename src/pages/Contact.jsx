import { useState } from "react";
import Title from "../components/commons/Title";
import ContactForm from "../components/contact/ContactForm";
import styles from "./Contact.module.css";
const Contact = () => {
  const [titleCH] = useState("聯絡我們");
  const [titleEN] = useState("Contact Us");
  const [desc] = useState("請填寫下列資料，我們將與您聯絡。");
  const [backgroundImage] = useState("contact");
  return (
    <>
      <section className={styles.titleSection}>
        <Title
          backgroundImage={backgroundImage}
          titleCH={titleCH}
          titleEN={titleEN}
          desc={desc}
        />
      </section>
      <section className={styles.formSection}>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
