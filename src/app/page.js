import styles from "@/styles/page.module.css";
import { chakraPetch } from "@/fonts/fonts";
// components
import ProfesionalProject from "@/components/PorfesionalProject/ProfesionalProject";
import PersonalProject from "@/components/PersonalProject/PersonalProject";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* header */}
      <section id="home" className={styles.headerSection}>
        <div className={styles.headerSectionBox}>
          <h2>ERIC PAPELL</h2>
          <h1>SOFTWARE DEVELOPER</h1>
          <p className={chakraPetch.className}>
            Hi, I’m Eric Papell a passionate programmer who is always eager to
            learn more. The more I learn, the more I want to keep learning!
            Welcome to my resume!
          </p>
        </div>
        <div className={`${styles.skillsBox} ${chakraPetch.className}`}>
          <div className={styles.skillsBoxIndividual}>
            <img src="/logoJs.png" />
            <div>
              <p>JavaScript</p>
            </div>
          </div>
          <div className={styles.skillsBoxIndividual}>
            <img src="/logoCSS.png" />
            <div>
              <p>CSS</p>
            </div>
          </div>
          <div className={styles.skillsBoxIndividual}>
            <img src="/logoHTML.png" />
            <div>
              <p>HTML</p>
            </div>
          </div>
          <div className={styles.skillsBoxIndividual}>
            <img src="/logoREACT.png" />
            <div>
              <p>REACT</p>
            </div>
          </div>
          <div className={styles.skillsBoxIndividual}>
            <img src="/logoNODE.png" />
            <div>
              <p>NODE</p>
            </div>
          </div>
          <div className={styles.skillsBoxIndividual}>
            <img src="/logoGIT.png" />
            <div>
              <p>GIT</p>
            </div>
          </div>
          <div className={styles.skillsBoxIndividual}>
            <img src="/logoDB.png" />
            <div>
              <p>SQL/NOSQL</p>
            </div>
          </div>
          <div className={styles.skillsBoxIndividual}>
            <img src="/logoWP.png" />
            <div>
              <p>WORDPRESS</p>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
      {/* profesional project */}
      <ProfesionalProject />
      {/* profesional project */}

      {/* personal project */}
      <PersonalProject />
      {/* personal project */}

      {/* contact */}
      <Contact />
      {/* contact */}
    </main>
  );
}
