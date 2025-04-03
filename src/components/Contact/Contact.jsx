import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Let's Connect!</h2>
        <p>I would love to hear from you! Whether you have a project in mind or just want to chat, feel free to reach out.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:megha.schalageri@gmail.com">megha.schalageri@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/megha-chalageri-9832382b4">linkedin.com/in/megha-chalageri-9832382b4</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Meghaschalageri">https://github.com/Meghaschalageri</a>
        </li>
      </ul>
    </footer>
  );
};
