import styles from "./personalProject.module.css";

export function PersonalProject() {
  return (
    <section className={styles.personalProjectSection}>
      <h2>Personal Projects</h2>
      <div className={styles.personalProjectSectionBox}>
        <button className={styles.btnPrev}>
          <img src="/arrow.png" />
        </button>
        <div className={styles.personalProjectSectionFirts}>
          <div className={styles.layer}></div>
          <div className={styles.profesionalProjectIndividualInactive}>
            <img src="petcode.webp" />

            <div className={styles.profesionalProjectIndividualSkillsInactive}>
              <p>Lorem</p>
              <p>Lorem</p>
            </div>
          </div>
        </div>
        <div className={styles.personalProjectSectionMedium}>
          <div className={styles.profesionalProjectIndividualActive}>
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
        <div className={styles.personalProjectSectionLast}>
          <div className={styles.layer}></div>

          <div className={styles.profesionalProjectIndividualInactive}>
            <img src="lebleu.webp" />

            <div className={styles.profesionalProjectIndividualSkillsInactive}>
              <p>Lorem</p>
              <p>Lorem</p>
            </div>
          </div>
        </div>
        <button className={styles.btnNext}>
          <img src="/arrow.png" />
        </button>
      </div>
    </section>
  );
}

export default PersonalProject;
