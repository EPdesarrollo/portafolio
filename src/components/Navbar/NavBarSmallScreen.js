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
  const styleBar = showLinks ? "90" : "0";
  return (
    <>
      <div className={styles.navbarSmallScreen}>
        <button onClick={handleShowLinks}>
          <img
            style={{ transform: `rotatez(${styleBar}deg)` }}
            src="bars.png"
          />
        </button>
      </div>

      <div
        style={{ transform: `translateX(${styleLinkBox}%)` }}
        className={styles.navbarSmallScreenLinksBox}
      >
        <Link href="#home" onClick={() => setShowLinks(false)}>
          goTo(<span className={aldrich.className}>HOME</span>)
        </Link>
        <Link onClick={() => setShowLinks(false)} href="#projects">
          goTo(<span className={aldrich.className}>PORTAFOLIO</span>)
        </Link>
        <Link onClick={() => setShowLinks(false)} href="#contact">
          goTo(<span className={aldrich.className}>CONTACTO</span>)
        </Link>
      </div>
    </>
  );
}

export default NavBarSmallScreen;
