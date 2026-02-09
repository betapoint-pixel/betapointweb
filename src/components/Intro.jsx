import styles from './Intro.module.scss'

const Intro = () => {
  return (
    <section id="intro" className={styles.intro}>
      <div className={styles.container}>
        <p className={styles.subText}>
          회사가 성장하면서 채용해야 하는 직원과 팀이 고민이세요?
        </p>
        <h2 className={styles.mainTitle}>
          <span className={styles.gradientText}>먼저 베타포인트로 시작해보세요.</span>
        </h2>
        <p className={styles.description}>
          업무 프로세스를 표준화 하여 오류와 관리 부담을 줄이고,<br />
          회사가 운영 관리가 아닌, 전략과 의사결정에 집중할 수 있게 합니다.
        </p>
      </div>
    </section>
  );
};

export default Intro;