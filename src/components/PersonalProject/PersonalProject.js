"use client";
import styles from "./personalProject.module.css";
import { useState } from "react";
import { firaCode } from "@/fonts/fonts";

const data = [
  {
    id: 0,
    image: "taquina.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. ",
    tecnologies: ["lorem", "ipsum"],
  },
  {
    id: 1,
    image: "petcode.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. ",
    tecnologies: ["lorem", "ipsum"],
  },
  {
    id: 2,
    image: "lebleu.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. ",
    tecnologies: ["lorem", "ipsum"],
  },
  // {
  //   id: 3,
  //   image: "lebleu.webp",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. ",
  //   tecnologies: ["lorem", "ipsum"],
  // },
  // {
  //   id: 4,
  //   image: "petcode.webp",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. ",
  //   tecnologies: ["lorem", "ipsum"],
  // },
  // {
  //   id: 5,
  //   image: "lebleu.webp",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. ",
  //   tecnologies: ["lorem", "ipsum"],
  // },
  // {
  //   id: 6,
  //   image: "lebleu.webp",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. ",
  //   tecnologies: ["lorem", "ipsum"],
  // },
];

export function PersonalProject() {
  const [count, setCount] = useState(1);

  function handleCountNext() {
    setCount(count + 1);
  }
  function handleCountPrev() {
    setCount(count - 1);
  }
  function handleDirectCount(id) {
    setCount(id);
  }
  return (
    <section className={styles.personalProjectSection}>
      <h2>Personal Projects</h2>
      <div className={styles.personalProjectSectionBox}>
        <div className={styles.personalProjectBox}>
          {/* 1 */}
          {data.map((project) => {
            if (count === project.id) {
              return (
                <div
                  key={project.id}
                  className={styles.personalProjectIndividualActive}
                >
                  <img src={project.image} />
                  <p
                    className={`${firaCode.className} ${styles.personalProjectIndividualText}`}
                  >
                    {data[count].text}
                  </p>
                  <div className={styles.personalProjectIndividualActiveSkills}>
                    {data[count].tecnologies.map((t, i) => {
                      return <p key={i}>{t}</p>;
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={project.id}
                  onClick={() => {
                    handleDirectCount(project.id);
                  }}
                  className={styles.personalProjectIndividualInactive}
                >
                  <div className={styles.layer}></div>
                  <img src={project.image} />
                  <div
                    className={styles.personalProjectIndividualInactiveSkills}
                  >
                    {data[count].tecnologies.map((t, i) => {
                      return <p key={i}>{t}</p>;
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
        {count !== 0 && (
          <button onClick={handleCountPrev} className={styles.btnPrev}>
            <img src="/arrow.png" />
          </button>
        )}
        {count !== data.length - 1 && (
          <button onClick={handleCountNext} className={styles.btnNext}>
            <img src="/arrow.png" />
          </button>
        )}
      </div>
    </section>
  );
}

export default PersonalProject;
