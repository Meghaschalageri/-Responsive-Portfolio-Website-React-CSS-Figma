import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Megha</h1>
        <p className={styles.description}>
        🚀 Passionate Software Developer with 3+ years of experience in web and 📱 mobile app development, 
        skilled in Angular, React, Node.js, MERN/MEAN stacks, and ERP integration (Microsoft Dynamics 365) for scalable solutions. 
        💻 Reach out to learn more!
        </p>
        <a href="mailto:megha.schalageri@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
