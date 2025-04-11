import React from "react";
import styles from "./aquarium.module.css";

export default function Aquarium() {
  return (
    <div>
      <div className={styles.aquarium}>
        <div className={styles.lid}></div>
        <div className={styles.water}>
          <ul className={styles.fish}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.sand}></div>
        <div className={styles.bottom}></div>
      </div>
      <div>
        <h4>Feeding Schedule</h4>
        <form className={styles["aquarium-schedule-form"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="monday">Monday</label>
            <input id="monday" name="monday" type="checkbox" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="tuesday">Tuesday</label>
            <input id="tuesday" name="tuesday" type="checkbox" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="wednesday">Wednesday</label>
            <input id="wednesday" name="wednesday" type="checkbox" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="thursday">Thursday</label>
            <input id="thursday" name="thursday" type="checkbox" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="friday">Friday</label>
            <input id="friday" name="friday" type="checkbox" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="saturday">Saturday</label>
            <input id="saturday" name="saturday" type="checkbox" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="sunday">Sunday</label>
            <input id="sunday" name="sunday" type="checkbox" />
          </div>
        </form>
      </div>
    </div>
  );
}
