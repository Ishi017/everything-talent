// components/AnimatedScrollBars.tsx

import React, { useEffect, useRef, useState } from 'react';
import styles from './AnimatedScrollBars.module.css';

const AnimatedScrollBars: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const firstBarRef = useRef<HTMLDivElement | null>(null);
  const secondBarRef = useRef<HTMLDivElement | null>(null);

  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate position for each horizontal bar
  const firstBarStyle = {
    top: scrollPosition < 200 ? `${scrollPosition * 0.1}px` : '150px',
  };
  const secondBarStyle = {
    top: scrollPosition > 200 && scrollPosition < 400 ? `${scrollPosition * 0.2 - 100}px` : '300px',
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.barContainer} ${styles.firstBar}`} ref={firstBarRef} style={firstBarStyle}>
        <div className={styles.verticalBar}></div>
        <div className={styles.rectangle}></div>
        <div className={styles.horizontalBar}></div>
      </div>

      <div className={`${styles.barContainer} ${styles.secondBar}`} ref={secondBarRef} style={secondBarStyle}>
        <div className={styles.verticalBar}></div>
        <div className={styles.rectangle}></div>
        <div className={styles.horizontalBar}></div>
      </div>

      {/* Add as many bar sections as needed */}
    </div>
  );
};

export default AnimatedScrollBars;