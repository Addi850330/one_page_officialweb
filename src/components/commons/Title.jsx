import styles from "./Title.module.css";
const Title = ({ backgroundImage, titleCH, titleEN, desc }) => {
  return (
    <div className={styles.comtainer}>
      {backgroundImage === "services" && (
        <img src="./images/services/Solution.jpg" alt="bgc" />
      )}
      {backgroundImage === "contact" && (
        <img src="./images/home/numberanimebg.jpg" alt="bgc" />
      )}
      <div className={styles.mask}></div>
      <div className={styles.title}>
        <div className={styles.titleCH}>{titleCH}</div>
        <div className={styles.titleEN}>{titleEN}</div>
      </div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default Title;
