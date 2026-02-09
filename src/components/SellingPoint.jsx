import React from 'react';
import styles from './SellingPoint.module.scss';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';

const SellingPoint = () => {
  const points = [
    {
      id: 1,
      title: "실시간 회계, 인사 관리와\n운영을 스마트하게",
      description: "회계기장 구조 설계부터 매월 직접 기장·검증까지. 인사 세팅 후 급여 운영과 현황을 상시 관리해요. 세무·노무까지 연결된 실무 운영을 책임집니다.",
      image: img1,
      
    },
    {
      id: 2,
      title: "경영 지표와 재무\n전략을 한눈에 파악",
      description: "재무·인사 데이터를 연결한 경영 리포트 체계를 구축해요. 현금흐름 FP&A와 시나리오를 관리합니다. 정부지원·투자까지 고려한 재무 전략을 세웁니다.",
      image: img2,
    },
    {
      id: 3,
      title: "전문가 서포트와\n컨설팅을 실시간으로",
      description: "회계·재무·인사 전문가를 배정하고 언제든 소통하세요. 월 1회 정기 리포트와 온·오프라인 미팅으로 점검합니다. 세무·노무·회계 원스톱 협업, Ad-hoc 이슈도 즉시 대응해요.",
      image: img3,
    }
  ];

  return (
    <section className={styles.selling_point}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>왜 베타포인트여야 할까요?</h2>
        </header>

        <div className={styles.content_list}>
          {points.map((point) => (
            <div key={point.id} className={styles.item}>
              <div className={styles.text_box}>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
              <div className={styles.image_box}>
                <img src={point.image} alt={point.title.replace('\n', ' ')} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellingPoint;