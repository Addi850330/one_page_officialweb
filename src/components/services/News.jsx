import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import newsValue from "../../value/news.json";
import styles from "./News.module.css";

const News = () => {
  const containerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    containerRef.current.classList.add(styles.dragging);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDown.current = false;
    containerRef.current.classList.remove(styles.dragging);
  };

  useEffect(() => {
    window.addEventListener("mouseup", stopDragging);
    return () => window.removeEventListener("mouseup", stopDragging);
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.slider}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      {newsValue.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          className={styles.card}
        >
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={item.title} />
            <div className={styles.mask}>
              <div>閱讀全文</div>
            </div>
          </div>
          <div className={styles.text}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default News;
