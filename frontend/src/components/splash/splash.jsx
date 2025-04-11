import { useState } from "react";

import styles from "./splash.module.css";

export default function Splash() {
  const [open, setOpen] = useState(true);

  const style = open ? { height: "100%" } : { height: "0" };
  function clickHandler() {
    setOpen(false);
  }
  return (
    <>
      <div style={style} className={styles.splash} onClick={clickHandler}>
        <h2>Are you ready to dive right in?</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-up-icon lucide-arrow-up"
        >
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      </div>
      <ul style={style} className={styles.bubbles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}
