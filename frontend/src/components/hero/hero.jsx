import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h2>
        Your aquatic pets aren't a piece of decor, they're family just like your
        fluffier friends. So let's treat them with the same love and care.
      </h2>
      <ul className={styles.bubbles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}
