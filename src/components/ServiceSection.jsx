import React from 'react';
import ServiceDetail from './ServiceDetail';
import styles from './ServiceSection.module.scss';

const ServiceSection = () => {
  const services = [
    {
      number: 1,
      title: "회계기장 & 세무지원",
      description: "회계기장은 회사 운영에서 발생하는 모든 거래를 증빙 기반으로 정리하고 회계 계정에 맞게 기록하는 서비스 입니다.",
      cardData: [
        { title: "이런 경우 필요해요", items: ["세무 신고를 문제없이 하고 싶을 때", "장부를 정확히 관리하고 싶을 때", "증빙 자료가 엉망일 때"] },
        { title: "이런 업무를 해드려요", items: ["세금계산서, 카드 등 정리", "월별 장부 마감 계정 처리", "증빙 누락 체크 및 가이드"] },
        { title: "매달 이런 결과물을 받아요", items: ["월별 손익(P&L) 요약", "주요 비용 구조 정리", "증빙 누락 리스트"] },
      ]
    },
    {
      number: 2,
      title: "인사관리 & 급여대행",
      description: "임직원의 입사부터 퇴사까지 발생하는 모든 인사 행정과 급여 계산을 정확하고 신속하게 처리합니다.",
      cardData: [
        { title: "이런 경우 필요해요", items: ["급여 계산이 매번 헷갈릴 때", "4대보험 처리가 번거로울 때", "인사 서류 관리가 안 될 때"] },
        { title: "이런 업무를 해드려요", items: ["급여 대장 작성 및 명세서 발송", "4대 보험 취득/상실 신고", "연차 및 인사 서류 관리"] },
        { title: "매달 이런 결과물을 받아요", items: ["급여 이체 리스트", "급여 대장 및 명세서", "인사 변동 현황 보고"] },
      ]
    },
    {
      number: 3,
      title: "재무전략 & 경영리포트",
      description: "단순 기록을 넘어 회사의 재무 상태를 분석하고, 미래 현금 흐름과 투자 전략을 수립할 수 있도록 돕습니다.",
      cardData: [
        { title: "이런 경우 필요해요", items: ["우리 회사의 현금이 어디로 가는지 궁금할 때", "투자를 앞두고 재무 정비가 필요할 때", "사업 계획 수립이 어려울 때"] },
        { title: "이런 업무를 해드려요", items: ["Cash-flow 시나리오 분석", "KPI 기반 경영 지표 설정", "투자용 재무 실사 대응"] },
        { title: "매달 이런 결과물을 받아요", items: ["커스텀 경영 리포트", "자금 계획 및 분석표", "전문가 코멘터리"] },
      ]
    }
  ];

  return (
    <section className={styles.service_section}>
      <div className={styles.inner}>
        {/* 상단 타이틀 추가 */}
        <header className={styles.section_header}>
          <h2 className={styles.main_title}>
            베타포인트는 <br className={styles.mobile_only} />
            이런 일을 제공해요
          </h2>
        </header>

        <div className={styles.service_list}>
          {services.map((service) => (
            <ServiceDetail key={service.number} {...service} />
          ))}
        </div>

        {/* 하단 추가 영역 (이미지 내용 반영 예정) */}
{/* 하단 추가 영역: 정갈한 좌측 정렬 구성 */}
<div className={styles.bottom_extra}>
  <div className={styles.extra_inner}>
    <h3 className={styles.extra_title}>
      회계기장과 CFO 서비스, <br />
      무엇이 다른가요?
    </h3>

    <ul className={styles.comparison_list}>
      <li className={styles.compare_item}>
        <strong className={`${styles.label} ${styles.primary}`}>회계기장</strong>
        <p className={styles.description}>장부를 정확히 정리하고 세무 신고 준비</p>
      </li>
      
      <li className={styles.compare_item}>
        <strong className={`${styles.label} ${styles.primary}`}>CFO 서비스</strong>
        <p className={styles.description}>기장을 바탕으로 경영 의사결정 지원</p>
      </li>
    </ul>

    <p className={styles.footer_notice}>
      필요 시 세무, 노무 전문가와 협업하여 단계별로 확장 가능합니다.
    </p>
  </div>
</div>
      </div>
    </section>
  );
};

export default ServiceSection;