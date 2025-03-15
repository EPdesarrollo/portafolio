import styles from "./profesionalProject.module.css";

export function ProfesionalProject() {
  return (
    <section id="projects" className={styles.profesionalProjectSection}>
      <h2>Profesional Projects</h2>
      <div className={styles.profesionalProjectBox}>
        <div className={styles.profesionalProjectIndividual}>
          <img src="petCode.webp" />
          <p className={styles.profesionalProjectIndividualText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi.
            Fusce dignissim sem vel ultricies feugiat.
          </p>
          <div className={styles.profesionalProjectIndividualSkills}>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
        <div className={styles.profesionalProjectIndividual}>
          <img src="lebleu.webp" />
          <p className={styles.profesionalProjectIndividualText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi.
            Fusce dignissim sem vel ultricies feugiat.
          </p>
          <div className={styles.profesionalProjectIndividualSkills}>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
        <div className={styles.profesionalProjectIndividual}>
          <img src="maxionline.webp" />
          <p className={styles.profesionalProjectIndividualText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi.
            Fusce dignissim sem vel ultricies feugiat.
          </p>
          <div className={styles.profesionalProjectIndividualSkills}>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
        <div className={styles.profesionalProjectIndividual}>
          <img src="taquina.webp" />
          <p className={styles.profesionalProjectIndividualText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            libero tortor, imperdiet nec ullamcorper ac, tincidunt id nisi.
            Fusce dignissim sem vel ultricies feugiat.
          </p>
          <div className={styles.profesionalProjectIndividualSkills}>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfesionalProject;
