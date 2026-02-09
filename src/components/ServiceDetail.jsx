import React from 'react';
import styles from './ServiceDetail.module.scss';

const ServiceDetail = ({ number, title, description, cardData }) => {
  return (
    <div className={styles.service_detail}>
      {/* 상단 헤더 영역 */}
      <div className={styles.header}>
        <span className={styles.number}>{number}</span>
        <div className={styles.title_group}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      {/* 하단 카드 리스트 영역 */}
      <div className={styles.card_list}>
        {cardData.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <h3>{card.title}</h3>
            <ul>
              {card.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;