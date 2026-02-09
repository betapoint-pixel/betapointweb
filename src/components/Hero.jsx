import styles from './Hero.module.scss';
import heroImg from '../assets/images/hero_img.png';
import { SOCIAL_LINKS } from '../constants/links';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* 왼쪽: 텍스트 콘텐츠 */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.brand}>베타포인트</span>에서<br />
            맞춤 경영지원 운영시스템을<br />
            구축하세요
          </h1>
          <a href={SOCIAL_LINKS.Contact} aria-label="견적 문의" target="_blank" 
          rel="noopener noreferrer">
             <button className={styles.ctaButton} >
              견적 문의
            </button>
          </a>     
        </div>

        {/* 오른쪽: 이미지/그래픽 박스 */}
        <div className={styles.imageBox}>
          {/* 이미지 태그나 별도의 그래픽 요소가 들어갈 자리 */}
          <img
            className={styles.heroImage}
            src={heroImg}
            alt="경영지원 운영시스템 그래픽"
          />
          <div className={styles.placeholder}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;