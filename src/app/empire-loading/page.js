'use client'
import styles from "./page.module.css";
import circel from "../../../public/R-tron.png";
import image from "../../../public/empires.png";
import Image from "next/image";

export default function Home() {

  // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     window.location.href = "https://blogreview.pro/skins/review-csgoempire/";
    //   }, 300);
    //   return () => clearTimeout(timeout);
    //   }, []);

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.loaderWrapper}>
          <div className={styles.spinnerBorder}></div>
          <Image src={image} alt="Avatar" className={styles.imageCircle} />
        </div>
      </main>
    </div>
    
  );
}