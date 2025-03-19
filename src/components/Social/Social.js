import styles from "./social.module.css";

export function Social() {
  return (
    <section className={styles.SocialMain}>
      <a target="_blank" href="https://github.com/EPdesarrollo">
        <img src="/logoGITHUB.png" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/eric-papell-rivadeneira-48946129a/"
      >
        <img src="/logoLN.png" />
      </a>
      <a target="_blank" href="https://wa.me/34658937401">
        <img src="/logoWS.png" />
      </a>
    </section>
  );
}

export default Social;
