"use client";
import styles from "./personalProject.module.css";
import { useState } from "react";

const data = [
  {
    id: 1,
    image: "taquina.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["lorem", "ipsum"],
  },
  {
    id: 2,
    image: "petcode.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["lorem", "ipsum"],
  },
  {
    id: 3,
    image: "lebleu.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["lorem", "ipsum"],
  },
];

export function PersonalProject() {
  return (
    <section className={styles.personalProjectSection}>
      <h2>Personal Projects</h2>
      <div className={styles.personalProjectBox}>
        {/* 1 */}
        <div className={styles.personalProjectIndividualInactive}>
          <div className={styles.layer}></div>
          <img src="petCode.webp" />
          <div className={styles.personalProjectIndividualInactiveSkills}>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
        {/* 2 */}
        <div className={styles.personalProjectIndividualActive}>
          <img src="petCode.webp" />
          <p className={styles.personalProjectIndividualText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi.
            Fusce dignissim sem vel ultricies feugiat.
          </p>
          <div className={styles.personalProjectIndividualActiveSkills}>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
        {/* 3 */}
        <div className={styles.personalProjectIndividualInactive}>
          <div className={styles.layer}></div>
          <img src="petCode.webp" />
          <div className={styles.personalProjectIndividualInactiveSkills}>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalProject;
