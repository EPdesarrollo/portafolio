"use client";
import styles from "./personalProject.module.css";
import { useState } from "react";

const data = [
  {
    id: 0,
    image: "taquina.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["lorem", "ipsum"],
  },
  {
    id: 1,
    image: "petcode.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["lorem", "ipsum"],
  },
  {
    id: 2,
    image: "lebleu.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["lorem", "ipsum"],
  },
];

export function PersonalProject() {
  const [count, setCount] = useState(1);
  return (
    <section className={styles.personalProjectSection}>
      <h2>Personal Projects</h2>
      <div className={styles.personalProjectSectionBox}>
        <div className={styles.personalProjectBox}>
          {/* 1 */}
          {data.map((project) => {
            if (count === project.id) {
              return (
                <div className={styles.personalProjectIndividualActive}>
                  <img src={data[count].image} />
                  <p className={styles.personalProjectIndividualText}>
                    {data[count].text}
                  </p>
                  <div className={styles.personalProjectIndividualActiveSkills}>
                    {data[count].tecnologies.map((t) => {
                      return <p>{t}</p>;
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <div className={styles.personalProjectIndividualInactive}>
                  <div className={styles.layer}></div>
                  <img src="petCode.webp" />
                  <div
                    className={styles.personalProjectIndividualInactiveSkills}
                  >
                    <p>Lorem</p>
                    <p>Lorem</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <button className={styles.btnPrev}>
          <img src="/arrow.png" />
        </button>
        <button className={styles.btnNext}>
          <img src="/arrow.png" />
        </button>
      </div>
    </section>
  );
}

export default PersonalProject;
