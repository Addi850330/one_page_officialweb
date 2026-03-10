import { useRef, useState } from "react";
import timelineValue from "../../value/milestone.json";
import styles from "./Timeline.module.css";

const Timeline = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    containerRef.current.setPointerCapture(e.pointerId);
    setStartX(e.clientX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const walk = e.clientX - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    if (e.pointerId && containerRef.current) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      className={styles.timelineWrapper}
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
      onPointerCancel={stopDragging} // 新增：處理 iOS 系統中斷（如滑到邊緣）
    >
      <div className={styles.timelineTrack}>
        {timelineValue.map((yearItem) => (
          <div className={styles.yearBlock} key={yearItem.new_ID}>
            <div className={styles.yearTitle}>{yearItem.year}</div>
            <div className={styles.milestoneList}>
              {yearItem.milestone.map((item, index) => (
                <div className={styles.milestoneItem} key={index}>
                  <div className={styles.month}>{item.month}</div>
                  <div className={styles.event}>{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
