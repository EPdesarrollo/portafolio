"use client";
import styles from "./personalProject.module.css";
import { useState } from "react";
import { chakraPetch } from "@/fonts/fonts";

const data = [
  {
    id: 0,
    image: "personalProjectMarketPL.webp",
    text: "Marketplace",
    tecnologies: ["lorem", "ipsum"],
  },
  {
    id: 1,
    image: "personalProjectNasa.webp",
    text: "NASA Search App",
    tecnologies: ["lorem", "ipsum"],
  },
  {
    id: 2,
    image: "personalProjectFaceReco.webp",
    text: "Face Recognition App",
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
    // <section className={styles.personalProjectSection}>
    //   <h2>Personal Projects</h2>
    //   <div className={styles.personalProjectSectionBox}>
    //     <div className={styles.personalProjectBox}>
    //       {/* 1 */}
    //       {data.map((project) => {
    //         if (count === project.id) {
    //           return (
    //             <div
    //               key={project.id}
    //               className={styles.personalProjectIndividualActiveCoomingSoon}
    //             >
    //               <img src={project.image} />
    //               <div className={styles.commingSoon}>
    //                 <p>Cooming soon...</p>
    //               </div>
    //             </div>
    //           );
    //         } else {
    //           return (
    //             <div
    //               key={project.id}
    //               onClick={() => {
    //                 handleDirectCount(project.id);
    //               }}
    //               className={
    //                 styles.personalProjectIndividualInactiveCoomingSoon
    //               }
    //             >
    //               <div className={styles.layer}></div>
    //               <img src={project.image} />{" "}
    //               <div className={styles.commingSoon}>
    //                 <p>Cooming soon...</p>
    //               </div>
    //             </div>
    //           );
    //         }
    //       })}
    //     </div>
    //     {/* {count !== 0 && (
    //       <button onClick={handleCountPrev} className={styles.btnPrev}>
    //         <img src="/arrow.png" />
    //       </button>
    //     )}
    //     {count !== data.length - 1 && (
    //       <button onClick={handleCountNext} className={styles.btnNext}>
    //         <img src="/arrow.png" />
    //       </button>
    //     )} */}
    //   </div>
    // </section>
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
                    className={`${chakraPetch.className} ${styles.personalProjectIndividualText}`}
                  >
                    {/* {data[count].text} */}
                  </p>
                  <p>{project.text}</p>
                  <div className={styles.personalProjectIndividualActiveSkills}>
                    {/* {data[count].tecnologies.map((t, i) => {
                      return <p key={i}>{t}</p>;
                    })} */}
                    <div className={styles.commingSoon}>
                      <p className={chakraPetch.className}>Cooming soon...</p>
                    </div>
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
                  <p>{project.text}</p>
                  <div
                    className={styles.personalProjectIndividualInactiveSkills}
                  >
                    {/* {data[count].tecnologies.map((t, i) => {
                      return <p key={i}>{t}</p>;
                    })} */}
                    <div className={styles.commingSoon}>
                      <p>Cooming soon...</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {/* {count !== 0 && (
          <button onClick={handleCountPrev} className={styles.btnPrev}>
            <img src="/arrow.png" />
          </button>
        )}
        {count !== data.length - 1 && (
          <button onClick={handleCountNext} className={styles.btnNext}>
            <img src="/arrow.png" />
          </button>
        )} */}
      </div>
    </section>
  );
}

export default PersonalProject;
