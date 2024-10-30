import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/kashyap.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              
              <p>
              I am a passionate and dedicated <span style={{ color: "#66fcf1", fontWeight: "bold" }}>full-stack developer</span> with expertise in both front-end and back-end technologies. My skills span across <span style={{ color: "#66FCF1", fontWeight: "bold" }}>React JS</span>, <span style={{ color: "#66fcf1", fontWeight: "bold" }}>Node JS</span>, and <span style={{ color: "#66fcf1", fontWeight: "bold" }}>Django</span>, allowing me to build dynamic and responsive user experiences, as well as robust server-side functionality. I have a strong foundation in databases, particularly <span style={{ color: "#66fcf1", fontWeight: "bold" }}>PostgreSQL</span> and <span style={{ color: "#66fcf1", fontWeight: "bold" }}>MySQL</span>. I have experience in <span style={{ color: "#66fcf1", fontWeight: "bold" }}> machine learning</span> and am enthusiastic about its potential to solve complex problems and enhance my development projects. I’m driven by a commitment to delivering high-quality, impactful solutions in all my work.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
