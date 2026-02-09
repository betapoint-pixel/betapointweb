import React from 'react';
import styles from './ReviewCard.module.scss';

const ReviewCard = ({ content, author, theme }) => {
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <p className={styles.content}>{content}</p>
      <span className={styles.author}>{author}</span>
    </div>
  );
};

export default ReviewCard;