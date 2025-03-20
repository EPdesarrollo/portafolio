"use client";
import styles from "./contact.module.css";
import { chakraPetch } from "@/fonts/fonts";

export function Succes({ setSucces }) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2>Successfully Sent</h2>
        <button
          className={chakraPetch.className}
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

export default Succes;
