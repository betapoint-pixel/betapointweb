import React, { useState } from 'react';
import styles from './FAQ.module.scss';

const faqData = [
  {
    id: 1,
    question: "다른 회계외주 서비스랑 무엇이 다른가요 ?",
    answer: (
      <div>
        <strong>단순히 장부를 대신 정리해주는 회계 외주가 아니라</strong>,
        월 단위 정기관리에 그치지 않고 주 단위 미팅은 물론, 필요 시 언제든지 비즈니스 논의가 가능한 <strong>경영 파트너</strong> 베타포인트입니다. 실시간 경영 관리를 통해 현금흐름과 수익성을 지속적으로 점검하고, 이를 바탕으로 <strong>구체적인 개선 제안과 컨설팅</strong>을 이어가며 내부 팀에 준하는 수준을 넘어, <strong>더 적극적으로 경영을 함께 운영해 나갑니다.</strong>
      </div>
    )
  },
  {
    id: 2,
    question: "데이터는 얼마나 안전하게 관리되나요?",
    answer: (
      <div>베타포인트는 고객사의 데이터를 최우선 가치로 두고 관리합니다.<br/>모든 데이터는 <strong>보안이 검증된 클라우드 환경</strong>에서 암호화되어 저장되며, 접근 권한은 최소한의 인원에게만 제한적으로 부여됩니다.또한 정기적인 보안 점검과 접근 로그 관리를 통해 무단 접근을 방지하고, 내부 보안 기준과 운영 프로세스를 지속적으로 개선하여 <strong>안정적이고 신뢰할 수 있는 데이터 보호 체계</strong>를 유지하고 있습니다.</div>
    )
  },
  {
    id: 3,
    question: "기본 요금 외에 별도로 고려해야 할 비용이 있나요?",
    answer: (
      <div>베타포인트는 가능한 한 <strong>기본 서비스 범위 내에서 대부분의 업무를 해결하려고 노력합니다.</strong><br/>다만 회사 규모 변화나 업무 범위가 크게 확장되는 경우, 또는 별도의 일회성 프로젝트가 필요한 경우에는 사전에 충분히 안내드린 후 협의하여 진행합니다.모든 비용은 투명하게 공유되며, 예고 없이 추가 비용이 발생하는 일은 없습니다.</div>
    )
  },  {
    id: 4,
    question: "계약 후 실제 운영은 언제부터 시작되나요?",
    answer: (
      <div>기존 세무사무소나 내부 담당자로부터 <strong>필요 자료를 전달받고 세팅을 시작한 시점부터 약 2주 정도의 준비 기간</strong>이 소요됩니다. 해당 기간 동안 데이터 정리와 시스템 세팅을 진행하며, 준비가 완료되면 즉시 실제 운영을 시작합니다. 자료 이관 상황에 따라 일정은 다소 조정될 수 있으나, 가능한 한 빠르고 안정적으로 서비스를 시작할 수 있도록 지원합니다.</div>
    )
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>FAQ</h2>
      
        <div className={styles.faqList}>
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.faqItem} ${openId === item.id ? styles.active : ''}`}
            >
              <button 
                className={styles.questionBox} 
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={openId === item.id}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.arrowIcon}></span>
              </button>
              
              <div className={styles.answerBox}>
                <div className={styles.answerInner}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;