import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  // 부드러운 스크롤을 위한 핸들러 (선택 사항)
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>Betapoint Co.</a>
      <nav className={styles.nav}>
        {/* 서비스 소개 -> Intro.jsx */}
        <a href="#intro" onClick={(e) => handleScroll(e, 'intro')}>서비스 소개</a>
        
        {/* 서비스 견적 -> PlanSection.jsx */}
        <a href="#plans" onClick={(e) => handleScroll(e, 'plans')}>서비스 견적</a>
        
        {/* FAQ -> FAQ.jsx */}
        <a href="#faq" onClick={(e) => handleScroll(e, 'faq')}>FAQ</a>
      </nav>
    </header>
  );
};

export default Header;