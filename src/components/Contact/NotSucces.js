"use client";
import styles from "./contact.module.css";
import { firaCode } from "@/fonts/fonts";

export function NotSucces({ setSucces }) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <span className={styles.symbolError}>X</span>
        <p>
          Oh no... there has been an error. Please try again or send me a direct
          message.
        </p>
        <button
          className={firaCode.className}
          onClick={() => {
            if (typeof window !== undefined) {
              setSucces("undefined");
              window.location.href = "/";
            }
          }}
        >
          Return
        </button>
      </div>
    </div>
  );
}

export default NotSucces;
