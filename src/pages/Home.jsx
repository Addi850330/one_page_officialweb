import { useState, useEffect, useRef } from "react";
import Carousel from "../components/homepage/Carousel";
import Digitalnumber from "../components/homepage/Digitalnumber";
import Timeline from "../components/homepage/Timeline";
import styles from "./Home.module.css";

const Home = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section className={styles.bannerSection}>
        <Carousel autoPlay={true} interval={5000} />
      </section>
      <section className={styles.aboutUsSection}>
        <img
          className={styles.svbgc}
          src="./images/home/productsAndServices.png"
          alt="bgc"
        />
        <div className={styles.svTitle}>
          <div className={styles.titleCH}>產品服務</div>
          <div className={styles.titleEN}>About Us</div>
        </div>
        <div className={styles.svInfos}>
          <div className={styles.infoFirst}>
            安瑟樂威打造多元分散式能源參與 能源市場的中央入口技術和財務平台。
          </div>
          <div className={styles.infoSecond}>
            具有豐富法規、資通光、大小機電、前瞻整合技術和物聯網商業模式的100%本土團隊。
          </div>
        </div>
        <div className={styles.svTargets}>
          <div className={styles.target}>
            <div className={styles.targeticon}>
              <img src="./images/home/ancillaryservices.png" alt="targetIcon" />
            </div>
            <div className={styles.targetSub}>輔助服務專家</div>
            <div className={styles.targetDesc}>Ancillary</div>
          </div>
          <div className={styles.target}>
            <div className={styles.targeticon}>
              <img src="./images/home/agile.png" alt="targetIcon" />
            </div>
            <div className={styles.targetSub}>敏捷</div>
            <div className={styles.targetDesc}>Agile</div>
          </div>
          <div className={styles.target}>
            <div className={styles.targeticon}>
              <img src="./images/home/Scheduler.png" alt="targetIcon" />
            </div>
            <div className={styles.targetSub}>首選合格排程商</div>
            <div className={styles.targetDesc}>Aggregator</div>
          </div>
        </div>
      </section>
      <section className={styles.digitalDisplay} ref={sectionRef}>
        <img
          className={styles.anbg}
          src="./images/home/numberanimebg.jpg"
          alt="bgc"
        />
        <span className={styles.mask}></span>
        <Digitalnumber start={start} />
      </section>
      <section className={styles.milestone}>
        <div className={styles.miletitle}>
          <div>里程碑</div>
          <div>Milestone</div>
        </div>
        <Timeline />
      </section>
    </>
  );
};

export default Home;
