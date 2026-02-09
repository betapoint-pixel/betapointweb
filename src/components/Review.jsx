import React from 'react';
import styles from './Review.module.scss';
import ReviewCard from './ReviewCard';

const stats = [
  { label: '재계약률', value: '98', unit: '%' },
  { label: '연간 관리 매출', value: '5백억', unit: '+' },
  { label: '고객 만족도', value: '9.8', unit: '' },
  { label: '경험 산업군 수', value: '10', unit: '+' },
];

const reviewData = [
  {
    id: 1,
    content: "그동안 재무, 인사 업무관리에 소홀 했는데, 이제는 숫자와 현황을 제때 정확하게 보고받을 수 있습니다. 대표로서 의사결정에만 집중할 수 있게 된 게 가장 큰 변화입니다.",
    author: "대표이사 / CEO at IT 스타트업 (B2B Saas)",
    theme: 'green'
  },
  {
    id: 2,
    content: "외주라고 느껴지지 않을 정도로 내부 팀처럼 밀착해서 관리해 줍니다. 문제가 생기면 먼저 짚어주고, 대응 방향까지 같이 고민해 주는 점이 인상적이었습니다.",
    author: "경영관리팀장 at 콘텐츠 · 미디어 / 광고",
    theme: 'blue'
  },
  {
    id: 3,
    content: "급여 · 4대보험 · 노무 이슈까지 한 번에 정리되니 직원 관리에 대한 부담이 크게 줄었습니다. 인원이 늘어나도 시스템이 흔들리지 않는다는 점이 가장 만족스럽습니다.",
    author: "인사 · 운영 총괄 at 프랜차이즈 / 오프라인 매장 운영",
    theme: 'blue'
  },
  {
    id: 4,
    content: "기장만 해주는 곳이 아니라, 숫자를 해석해서 'Why'와 'Next 액션'을 알려줍니다. 재무를 처음으로 경영 도구처럼 쓰게 됐습니다.",
    author: "재무담당 이사 / Head of Finance at 제조 · 유통 (중소·중견기업)",
    theme: 'green'
  }
];

const Review = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
      <h2 className={styles.title}>실제 고객의 목소리가 증명해요</h2>
      
      {/* 상단 지표 섹션 */}
      <div className={styles.statsContainer}>
        {stats.map((item, idx) => (
          <div key={idx} className={styles.statCircle}>
            <span className={styles.statLabel}>{item.label}</span>
            <strong className={styles.statValue}>
              {item.value}<small>{item.unit}</small>
            </strong>
          </div>
        ))}
      </div>

      {/* 하단 리뷰 그리드 섹션 */}
      <div className={styles.reviewGrid}>
        {reviewData.map((review) => (
          <ReviewCard 
            key={review.id}
            content={review.content}
            author={review.author}
            theme={review.theme}
          />
        ))}
      </div> 
      </div>
    </section>
  );
};

export default Review;