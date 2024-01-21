import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <Image
            src="/images/pecil_535524.png" 
            alt="Pencil"
            className={styles.image}
            width={30}
            height={30}
        />
        <h2 className={styles.title}>LISTALK</h2>
      </div>
      <div className={styles.textFooter}>
        <p className={styles.largeFont}>Concept</p>
        <p className={styles.largeFont}>Contact us</p>
        <p className={styles.largeFont}>Blog</p>
        <p className={styles.underline}>Privacy Policy</p>
        <p className={styles.underline}>Terms of service</p>
        <p className={styles.underline}>Cookies settings</p>
      </div>
      <div className={styles.iconsContainer}>
        <img src="/images/Facebook.png" alt="Facebook Icon" className={styles.icon} />
        <img src="/images/Instagram.png" alt="Instagram Icon" className={styles.icon} />
        <img src="/images/Twitter.png" alt="Twitter Icon" className={styles.icon} />
        <img src="/images/LinkedIn.png" alt="LinkedIn Icon" className={styles.icon} />
      </div>
    </footer>
  );
};

export default Footer;




