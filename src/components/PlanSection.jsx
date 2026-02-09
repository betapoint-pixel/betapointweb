import React from 'react';
import styles from './PlanSection.module.scss';
import PlanCard from './PlanCard';

// Vite + vite-plugin-svgr 사용 시 권장되는 방식
import IconLevel1 from '../assets/images/level1.svg?react';
import IconLevel2 from '../assets/images/level2.svg?react';
import IconLevel3 from '../assets/images/level3.svg?react';

const plans = [
  { 
    id: 'core', 
    title: 'CORE', 
    description: '개인사업자, 소규모 비즈니스를 위한 회계, 급여 기본서비스', 
    price: '50,000', 
    features: ['회원당 최대 5개의 맞춤 워크플로우 설정 가능', '스타트업, 소규모 팀에 적합', '필수 비즈니스 툴과 기본 연동 지원'], 
    Icon: IconLevel1 
  },
  { 
    id: 'standard', 
    title: 'STANDARD', 
    description: '스타트업, 중소 비즈니스를 위한 재무, 인사 기본서비스', 
    price: '1,990,000', 
    features: ['무제한 맞춤 워크플로우 설정', '추가 기능과 통합 지원', '다중 엔티티 지원 고급 ERP'], 
    Icon: IconLevel2 
  },
  { 
    id: 'growth', 
    title: 'GROWTH', 
    description: '시리즈 투자, 중형 비즈니스를 위한 CFO · CHRO 서비스', 
    price: '2,990,000', 
    features: ['모든 스탠다드 기능에 우선 지원까지', '전담 계정 매니저와 온보딩 지원 제공', '커스텀 API 연동과 고급 자동화 지원'], 
    Icon: IconLevel3 
  }
];

const PlanSection = () => {
  return (
    <section id="plans" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>규모에 맞게, 필요한 만큼만 <br /> 플랜을 선택할 수 있어요</h2>
        </div>

        <div className={styles.scrollArea}>
          <div className={styles.cardTrack}>
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <div className={styles.fadeEdge} />
        </div>
      </div>
    </section>
  );
};

export default PlanSection;