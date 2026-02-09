import React from 'react';
import styles from './Footer.module.scss';
import InstaSVG from '../assets/images/insta.svg?react';
import BlogSvg from '../assets/images/blog.svg?react';
import { SOCIAL_LINKS } from '../constants/links';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* 1. 상단 SNS 아이콘 영역 */}
        <div className={styles.socials}>
          <a href={SOCIAL_LINKS.INSTAGRAM} className={styles.icon} aria-label="Instagram" target="_blank" 
          rel="noopener noreferrer">
             <InstaSVG aria-hidden="true" />
          </a>
          <a href={SOCIAL_LINKS.Blog} className={styles.icon} aria-label="Blog" target="_blank" 
          rel="noopener noreferrer">
             <BlogSvg aria-hidden="true" />
          </a>
        </div>

        {/* 2. 기업 상세 정보 영역 */}
        <div className={styles.infoArea}>
          <div className={`${styles.row} ${styles.contact}`}>
            <span className={styles.bold}>info@betapointcompany.com &nbsp; |</span>
            <span className={styles.bold}>Tel. 0507-1314-7322</span>
          </div>
          
          <div className={styles.row}>
            <span>서울특별시 송파구 위례광장로 199, 501-5호(장지동, 성희프라자)</span>
          </div>
          
          <div className={styles.row}>
            <span>대표자: 김지후, 이주섭</span>
            <span>사업자등록 번호: 116-88-03367</span>
          </div>
        </div>

        {/* 3. 하단 카피라이트 */}
        <p className={styles.copyright}>
         Copyright ⓒ 2026 BetaPoint, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;