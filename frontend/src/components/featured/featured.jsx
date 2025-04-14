import React from "react";
import styles from "./featured.module.css";

export default function Featured() {
  return (
    <section className={styles.featured}>
      <h2 className={styles["section-heading"]}>
        Are you new to the aquarium hobby?
      </h2>
      <div className={styles["featured-flex"]}>
        <div className={styles["featured-item"]}>
          <h3>There's tons to learn</h3>
          <p>
            We have tons of informative how-to articles that teach you the
            basics of fishkeeping so that your new friend lives a long and
            fruitful life with you.
          </p>
        </div>
        <div className={styles["featured-item"]}>
          <h3>Create Routines</h3>
          <p>
            We'll help you create feeding and cleaning routines so that your pet
            can grow up happy and healthy in an environment that's clean.
          </p>
        </div>
        <div className={styles["featured-item"]}>
          <h3>Want to know more?</h3>
          <p>
            You'll will be able to find information on the size, life-span,
            diet, enclosure size, and habitat as well as any accessories that
            your pet should have.
          </p>
        </div>
      </div>
    </section>
  );
}
