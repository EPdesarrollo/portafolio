import styles from "./social.module.css";

export function Social() {
  return (
    <section className={styles.SocialMain}>
      <img src="/logoGITHUB.png" />
      <img src="/logoLN.png" />
      <img src="/logoWS.png" />
    </section>
  );
}

export default Social;
