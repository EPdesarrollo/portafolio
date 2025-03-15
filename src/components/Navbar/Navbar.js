import styles from "./navbar.module.css";
import Link from "next/link";
// fonts
import { aldrich } from "@/fonts/fonts";
import { firaCode } from "@/fonts/fonts";

export function Navbar() {
  return (
    <section className={`${styles.navbarMain} ${firaCode.className}`}>
      <div className={styles.navbarBoxLayout}>
        <Link href="#home">
          goTo(<span className={aldrich.className}>HOME</span>)
        </Link>
        <Link href="#projects">
          goTo(<span className={aldrich.className}>PORTAFOLIO</span>)
        </Link>
        <Link href="#contact">
          goTo(<span className={aldrich.className}>CONTACTO</span>)
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
