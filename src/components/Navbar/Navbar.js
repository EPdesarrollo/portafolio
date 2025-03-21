import styles from "./navbar.module.css";
import Link from "next/link";
// fonts
import { aldrich } from "@/fonts/fonts";
import { chakraPetch } from "@/fonts/fonts";
// components
import NavBarSmallScreen from "./NavBarSmallScreen";

export function Navbar() {
  return (
    <section className={`${styles.navbarMain} ${chakraPetch.className}`}>
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
      <div className={styles.navbarSmallScreen}>
        <NavBarSmallScreen aldrich={aldrich} />
      </div>
    </section>
  );
}

export default Navbar;
