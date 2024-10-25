import React from 'react';
import styles from './CultureCard.module.css'; // Import your CSS module

const CultureCard: React.FC = () => {
  return (
      <div className={styles.cardContainer}>
    <div className={styles.card}>
      <h2 className={styles.title}>Our Culture</h2>
      <p className={styles.description}>
        We foster a collaborative and inclusive environment where innovation thrives, professional growth is supported, and every team member is valued.
      </p>
      <p className={styles.description1}>
        Everything Talent is built on the principles of collaboration, respect, and continuous growth. We are a team of dedicated professionals passionate about improving the hiring experience for both employers and candidates. Our culture fosters creativity, encourages learning, and supports each individual’s development.
      </p>
      <p className={styles.description1}>
        We are driven by a shared commitment to making a positive impact on the world of recruitment. As we grow, we remain focused on delivering solutions that are not only effective but also aligned with our core values. We invite you to join us on this journey and experience the difference our platform can make in your hiring process.
      </p>
      <button className={styles.contactButton}>Contact Us</button>
    </div>
    </div>
  );
};

export default CultureCard;