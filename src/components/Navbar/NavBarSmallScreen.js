"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export function NavBarSmallScreen({ aldrich }) {
  const [showLinks, setShowLinks] = useState(false);
  function handleShowLinks() {
    showLinks ? setShowLinks(false) : setShowLinks(true);
  }
  const styleLinkBox = showLinks ? "0" : "-100";
  return (
    <>
      <div className={styles.navbarSmallScreen}>
        <button onClick={handleShowLinks}>
          <img src="logoDB.png" />
        </button>
      </div>

      <div
        style={{ transform: `translateX(${styleLinkBox}%)` }}
        className={styles.navbarSmallScreenLinksBox}
      >
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
    </>
  );
}

export default NavBarSmallScreen;
