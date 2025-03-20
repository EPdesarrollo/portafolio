import styles from "./profesionalProject.module.css";
import { chakraPetch } from "@/fonts/fonts";

const data = [
  {
    id: 0,
    image: "petCode.webp",
    text: "Web platform for companies who offer pet services and products. You can filter and search them by name, category or city. AI images chosen by client. A headless Wordpress is used to feed the blog area.",
    tecnologies: ["javascript", "react", "node"],
    link: "https://petcode.guide/",
  },
  {
    id: 1,
    image: "lebleu.webp",
    text: "Website for a Canadian real estate firm, which showcases six available properties, including the features, floor maps and pictures of each unit, plus a customized map of the location and a short video.",
    tecnologies: ["javascript", "react", "node"],
    link: "https://thelebleu.com/",
  },
  {
    id: 2,
    image: "maxionline.webp",
    text: "Informative section with monthly content, for the biggest retail corporation that operates a chain of supermarkets in Ecuador. Each landing page is tailored to fit the content and make it didactic.",
    tecnologies: ["worpdress", "javascript"],
    link: "https://www.maxionline.ec/",
  },
  {
    id: 3,
    image: "taquina.webp",
    text: "Website for an editorial and communications company, it highlighting the company's mission, vision, and values, as well as the services they provide, some of the work they have done, and previous clients.",
    tecnologies: ["javascript", "react"],
    link: "https://grupotaquina.com/",
  },
];

export function ProfesionalProject() {
  return (
    <section id="projects" className={styles.profesionalProjectSection}>
      <h2>Profesional Projects</h2>
      <div className={styles.profesionalProjectBox}>
        {data.map((project) => {
          return (
            <a
              key={project.id}
              className={`${chakraPetch.className} ${styles.profesionalProjectIndividual}`}
              href={project.link}
              target="_blank"
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
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ProfesionalProject;
