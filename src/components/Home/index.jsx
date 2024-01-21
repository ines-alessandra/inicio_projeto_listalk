import styles from "./home.module.scss";
import Image from "next/image";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.centeredImage}>
        <Image
          src="/images/image1.png" 
          alt="Centered Image"
          layout="fill" // Ajusta para preencher completamente o contêiner pai
          objectFit="cover" 
        />
      </div>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>LIST</h2>
        <h2 className={styles.subTitle}>ALK</h2>
        <div>
          <p className={styles.text}>Your Ultimate Destination for</p>
          <p className={styles.text2}>Cataloging Life's Favorites</p>
        </div>
      </div>
    </section>
  );
};

export default Home;

