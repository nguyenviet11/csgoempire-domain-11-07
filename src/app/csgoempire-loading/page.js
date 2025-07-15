'use client'
import styles from "./page.module.css";
import circel from "../../../public/R-tron.png";
import image from "../../../public/icon.png";
import Image from "next/image";

export default function Home() {
  // const handleClick = () => {
  //     window.location.href = "/csgoempire-connecting"; 
  // }

  return (
    <div
      // onMouseMove={handleClick}
      // onClick={handleClick}
    >
      <main className={styles.main}>
        <div className={styles.loaderWrapper}>
          <div className={styles.spinnerBorder}></div>
          <Image src={image} alt="Avatar" className={styles.imageCircle} />
        </div>
      </main>
    </div>
    
  );
}