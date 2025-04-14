import React from "react";
import styles from "./sign-up-form.module.css";

export default function SignUpForm() {
  return (
    <section className={styles["aquarium-form"]}>
      <h2 className={styles["section-heading"]}>Sign Up to get started!</h2>
      <form className="form-flex">
        <div>
          <label htmlFor="">First Name:</label>
        </div>
      </form>
    </section>
  );
}
