import { useRef, useState, useEffect } from "react";
import timelineValue from "../../value/milestone.json";
import styles from "./Timeline.module.css";

const Timeline = () => {
  const containerRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    containerRef.current.classList.add(styles.dragging);

    // 記錄初始位置
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;

    // 鎖定指標（防止滑出邊界失效）
    containerRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();

    const x = e.pageX - containerRef.current.offsetLeft;

    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    containerRef.current.classList.remove(styles.dragging);

    if (containerRef.current && e.pointerId !== undefined) {
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
      onPointerCancel={stopDragging}
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
