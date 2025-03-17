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
  {
    id: 4,
    image: "taquina.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi. Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["lorem", "ipsum"],
  },
];

export function PersonalProject() {
  const [count, setCount] = useState(0);
  // const [indexPrev, setIndexPrev] = useState(1);
  // const [indexNext, setIndexNext] = useState(2);
  const numElements = data.length;

  function handleCountPrev() {
    setCount(count - 1);
  }
  function handleCountNext() {
    if (count === numElements - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <section className={styles.personalProjectSection}>
      <h2>Personal Projects</h2>
      {count !== 0 ? (
        <button onClick={handleCountPrev} className={styles.btnPrev}>
          <img src="/arrow.png" />
        </button>
      ) : (
        <></>
      )}
      <div className={styles.personalProjectSectionBox}>
        {/* <div className={styles.personalProjectSectionFirts}>
          <div className={styles.layer}></div>
          <div className={styles.profesionalProjectIndividualInactive}>
            <img src={data[indexPrev].image} />

            <div className={styles.profesionalProjectIndividualSkillsInactive}>
              {data[indexPrev].tecnologies.map((el, id) => {
                return <p key={id}>{el}</p>;
              })}
            </div>
          </div>
        </div>
        <div className={styles.personalProjectSectionMedium}>
          <div className={styles.profesionalProjectIndividualActive}>
            <img src={data[count].image} />
            <p className={styles.profesionalProjectIndividualText}>
              {data[count].text}
            </p>
            <div className={styles.profesionalProjectIndividualSkills}>
              {data[count].tecnologies.map((el, id) => {
                return <p key={id}>{el}</p>;
              })}
            </div>
          </div>
        </div>
        <div className={styles.personalProjectSectionLast}>
          <div className={styles.layer}></div>

          <div className={styles.profesionalProjectIndividualInactive}>
            <img src={data[indexNext].image} />

            <div className={styles.profesionalProjectIndividualSkillsInactive}>
              {data[indexNext].tecnologies.map((el, id) => {
                return <p key={id}>{el}</p>;
              })}
            </div>
          </div>
        </div> */}
        {data.map((project) => {
          return (
            <div className={styles.personalProjectSectionMedium}>
              <div className={styles.profesionalProjectIndividualActive}>
                <img src={project.image} />
                <p className={styles.profesionalProjectIndividualText}>
                  {project.text}
                </p>
                <div className={styles.profesionalProjectIndividualSkills}>
                  {project.tecnologies.map((el, id) => {
                    return <p key={id}>{el}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {count !== numElements - 1 ? (
        <button onClick={handleCountNext} className={styles.btnNext}>
          <img src="/arrow.png" />
        </button>
      ) : (
        <></>
      )}
    </section>
  );
}

export default PersonalProject;
