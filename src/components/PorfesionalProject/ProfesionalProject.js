import styles from "./profesionalProject.module.css";
import { firaCode } from "@/fonts/fonts";

const data = [
  {
    id: 0,
    image: "petCode.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi.Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["javascript", "react"],
  },
  {
    id: 1,
    image: "lebleu.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi.Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["javascript", "react"],
  },
  {
    id: 2,
    image: "maxionline.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi.Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["javascript", "react"],
  },
  {
    id: 3,
    image: "taquina.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi.Fusce dignissim sem vel ultricies feugiat.",
    tecnologies: ["javascript", "react"],
  },
];

export function ProfesionalProject() {
  return (
    <section id="projects" className={styles.profesionalProjectSection}>
      <h2>Profesional Projects</h2>
      <div className={styles.profesionalProjectBox}>
        {data.map((project) => {
          return (
            <div
              key={project.id}
              className={`${firaCode.className} ${styles.profesionalProjectIndividual}`}
            >
              <div className={styles.imageContainer}>
                <img src={project.image} />
              </div>
              <p className={styles.profesionalProjectIndividualText}>
                {project.text}
              </p>
              <div className={styles.profesionalProjectIndividualSkills}>
                {project.tecnologies.map((t, i) => {
                  return <p key={i}>{t}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProfesionalProject;
