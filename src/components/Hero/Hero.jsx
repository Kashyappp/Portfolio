import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kashyap</h1>
        <h2 className={styles.title2}>Full-stack Developer</h2>
        {/* <p className={styles.description}>
        
        </p> */}
        <div className={styles.buttonGroup}>
        <a href="mailto:kashyap.bastola11@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="assets/hero/Kashyap_Bastola_Resume.pdf" className={styles.resumeBtn} download="Kashyap_Bastola_Resume">
            Resume
          </a>
          </div>

      </div>
      <img
        src={getImageUrl("hero/hero1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
