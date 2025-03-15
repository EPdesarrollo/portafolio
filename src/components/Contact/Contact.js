import styles from "./contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Any questions? Contact me!</h2>
      <form className={styles.form}>
        <div className={styles.inputLayout}>
          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input className={styles.input} type="text" name="name" id="name" />
          </div>
          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              id="email"
            />
          </div>
        </div>
        <div className={styles.textareaBox}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.textarea}
            name="message"
            id="message"
            rows={10}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
