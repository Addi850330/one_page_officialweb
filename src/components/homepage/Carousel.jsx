import { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ autoPlay = true, interval = 5000 }) => {
  const banners = [
    {
      id: 1,
      imageUrl: "./images/home/bannerSmartCityOnline.png",
      linkUrl: "https://xxx",
      showLinktag: true,
    },
    {
      id: 2,
      imageUrl: "./images/home/bannerCWEF.png",
      linkUrl: "https://xxx",
      showLinktag: true,
    },
    {
      id: 3,
      imageUrl: "./images/home/bannerNetZero.png",
      linkUrl: "https://xxx",
      showLinktag: false,
    },
  ];

  const extendedImages = [banners[banners.length - 1], ...banners, banners[0]];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);

  const windowRef = useRef(null);
  const timerRef = useRef(null);

  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  /* ------------------ resize ------------------ */
  useEffect(() => {
    const updateWidth = () => {
      if (windowRef.current) {
        setIsAnimating(false);
        setSlideWidth(windowRef.current.offsetWidth);

        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  /* ------------------ autoplay ------------------ */
  const nextSlide = () => {
    if (isLocked) return;
    setIsLocked(true);
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isLocked) return;
    setIsLocked(true);
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (!autoPlay) return;

    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, interval);

    return () => clearInterval(timerRef.current);
  }, [currentIndex, autoPlay, interval]);

  /* ------------------ infinite logic ------------------ */
  const handleTransitionEnd = () => {
    if (currentIndex === extendedImages.length - 1) {
      setIsAnimating(false);
      setCurrentIndex(1);
      return;
    }

    if (currentIndex === 0) {
      setIsAnimating(false);
      setCurrentIndex(banners.length);
      return;
    }

    setIsLocked(false);
  };

  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => {
        setIsAnimating(true);
        setIsLocked(false);
      });
    }
  }, [isAnimating]);

  /* ------------------ swipe ------------------ */
  const handleStart = (x) => {
    if (isLocked) return;
    isDragging.current = true;
    startX.current = x;
  };

  const handleMove = (x) => {
    if (!isDragging.current) return;
    currentX.current = x;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;

    const diff = currentX.current - startX.current;
    const threshold = slideWidth * 0.2;

    if (diff > threshold) prevSlide();
    else if (diff < -threshold) nextSlide();

    isDragging.current = false;
  };

  return (
    <div
      className={styles.carouselWindow}
      ref={windowRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div
        className={styles.carouselTrack}
        style={{
          transform: `translateX(-${currentIndex * slideWidth}px)`,
          transition: isAnimating ? "transform 0.5s ease" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((item, index) => (
          <div key={`${item.id}-${index}`} className={styles.slide}>
            <img src={item.imageUrl} alt="" />
            {item.showLinktag && (
              <button
                className={styles.linkBtn}
                onClick={() => window.open(item.linkUrl, "_blank")}
              >
                前往連結
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        className={`${styles.controlBtn} ${styles.leftBtn} ${
          isLocked ? styles.locked : ""
        }`}
        onClick={prevSlide}
      >
        ‹
      </button>

      <button
        className={`${styles.controlBtn} ${styles.rightBtn} ${
          isLocked ? styles.locked : ""
        }`}
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
