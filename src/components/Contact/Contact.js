"use client";
import { useState } from "react";
import styles from "./contact.module.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
// components
import Succes from "./Succes";
import NotSucces from "./NotSucces";

export function Contact() {
  const [token, setHToken] = useState(null); //captcha token
  const [messageCount, setMessageCount] = useState("0"); //mensage de backend
  const [messageGot, setMessageGot] = useState(""); //mensage de backend
  const [succes, setSucces] = useState("undefined"); // si el formulario se envio sin errores
  const [submitting, setSubmitting] = useState(false); // si el formulario se envio sin errores
  const [messageObject, setMessageObject] = useState({
    nombre: "",
    email: "",
    message: "",
    checkboxGhost: "off",
  }); //data enviada

  //
  const handleMessage = function (e) {
    setMessageObject({
      ...messageObject,
      [e.target.name]: e.target.value,
    });
  };

  //
  const onCaptchaExpires = () => setHToken(null);

  //
  const handleSubmit = async function (e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(
        "https://portafolio-five-ruby-89.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify({ messageObject, token: token }),
        }
      );
      const data = await res.json();
      if (data.status === 400 && data.type === "general") {
        setSucces("false");
        console.log(123);
      }
      if (data.status === 400 && data.type === "concreto") {
        setMessageGot(data.message);
        setMessageCount(data.count);
        console.log(data.message, data.count);
      }
      if (data.status === 200) {
        setSucces("true");
        console.log(data.message, data.count);
      }
    } catch (err) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Any questions? Contact me!</h2>
      <form className={styles.form}>
        <div className={styles.inputLayout}>
          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              type="text"
              name="name"
              id="name"
              onChange={handleMessage}
            />
          </div>
          <div className={styles.inputBox}>
            {messageCount === "2" ? (
              <p className={styles.textoError}>{messageGot}</p>
            ) : (
              <></>
            )}
            {messageCount === "3" ? (
              <p className={styles.textoError}>{messageGot}</p>
            ) : (
              <></>
            )}
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              id="email"
              onChange={handleMessage}
            />
          </div>
        </div>
        <div className={styles.textareaBox}>
          {messageCount === "4" ? (
            <p className={styles.textoError}>{messageGot}</p>
          ) : (
            <></>
          )}
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.textarea}
            name="message"
            id="message"
            rows={5}
            onChange={handleMessage}
          />
        </div>
        {messageCount === "5" ? (
          <p className={styles.textoError}>{messageGot}</p>
        ) : (
          <></>
        )}
        <HCaptcha
          // sitekey="10000000-ffff-ffff-ffff-000000000001"
          sitekey="779cb74e-3866-4432-9760-7e3847e64592"
          onVerify={setHToken}
          onExpire={onCaptchaExpires}
        />
        {submitting ? (
          <button type="button">Submitting...</button>
        ) : (
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        )}
      </form>
      {succes === "true" ? <Succes setSucces={setSucces} /> : <></>}
      {succes === "false" ? <NotSucces setSucces={setSucces} /> : <></>}
    </section>
  );
}

export default Contact;
