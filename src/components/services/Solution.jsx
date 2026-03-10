import solutionData from "../../value/solution.json";
import styles from "./Solution.module.css";

const Solution = () => {
  return (
    <div className={styles.solutionInfos}>
      {solutionData.map((item) => (
        <div key={item.id} className={styles.information}>
          <img src={item.backgroundImage} className={styles.backgroundImage} />
          <div className={styles.titleNumber}>{item.titleNumber}</div>
          <div className={styles.solutionTitle}>{item.solutionTitle}</div>
          <div className={styles.description}>
            <div className={styles.solutionDesc}>
              {item.solutionDescription}
            </div>
            <div className={styles.solutionIcon}>
              <img src={item.solutionIcon} alt={item.solutionTitle} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solution;
