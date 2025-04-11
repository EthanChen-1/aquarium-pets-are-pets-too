import React from "react";
import styles from "./aquarium-list.module.css";
import Aquarium from "../aquarium/aquarium";

export default function AquariumList({ numOfAquariums }) {
  const aquariums = [];
  for (let i = 0; i < numOfAquariums; i++) {
    aquariums.push(<Aquarium />);
  }
  return (
    <section className={styles["aquarium-list"]}>
      <h2 className={styles["section-heading"]}>Your Aquariums</h2>
      <div className={styles["aquarium-list-flex"]}>
        {aquariums.map((item) => item)}
      </div>
    </section>
  );
}
