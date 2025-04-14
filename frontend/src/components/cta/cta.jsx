import React from "react";
import styles from "./cta.module.css";

export default function Cta() {
  return (
    <section className={styles.cta}>
      <h2>Want to get started?</h2>
      <div className={styles["cta-flex"]}>
        <button>Sign Up</button>
        <p>Or</p>
        <button>Log In</button>
      </div>
    </section>
  );
}
