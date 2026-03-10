import { useState } from "react";
import Title from "../components/commons/Title";
import Solution from "../components/services/Solution";
import News from "../components/services/News";
import styles from "./Services.module.css";
const Services = () => {
  const [titleCH] = useState("解決方案");
  const [titleEN] = useState("Solution");
  const [desc] = useState("");
  const [backgroundImage] = useState("services");

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
      <section className={styles.solutionSection}>
        <Solution />
      </section>
      <section className={styles.newsSection}>
        <div className={styles.title}>
          新聞報導 <span>News</span>
        </div>
        <News />
      </section>
    </>
  );
};

export default Services;
