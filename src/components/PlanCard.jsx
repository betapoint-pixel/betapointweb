import React from 'react';
import styles from './PlanCard.module.scss';
import { SOCIAL_LINKS } from '../constants/links';

const PlanCard = ({ plan }) => {
  const IconComponent = plan.Icon;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{plan.title}</h3>
          {/* SVG 컴포넌트 출력 */}
          {IconComponent && <IconComponent className={styles.icon} />}
        </div>
        <p className={styles.description}>{plan.description}</p>
      </div>

      <div className={styles.priceSection}>
        <span className={styles.currency}>₩</span>
        <span className={styles.amount}>{plan.price}</span>
        <span className={styles.period}>/ 월</span>
      </div>

      <ul className={styles.featureList}>
        {plan.features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>

      <a href={SOCIAL_LINKS.Contact}  aria-label="플랜 선택" target="_blank" 
          rel="noopener noreferrer">  
        <button className={styles.planButton}>
              플랜선택
        </button>    
      </a>
    </article>
  );
};

export default PlanCard;