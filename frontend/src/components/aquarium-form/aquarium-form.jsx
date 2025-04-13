import React, { useActionState } from "react";
import styles from "./aquarium-form.module.css";

const NUM_AQUA = { amount: 1 };

export default function AquariumForm({ setAmount }) {
  async function handleSubmit(prevState, formData) {
    const numOfAquariums = await formData.get("aqua-num");
    console.log(Number(numOfAquariums));
    setAmount(numOfAquariums);
    return { amount: numOfAquariums };
  }

  const [state, formAction, isPending] = useActionState(handleSubmit, NUM_AQUA);

  return (
    <section className={styles["aquarium-form"]}>
      <form className={styles["aquarium-form-flex"]} action={formAction}>
        <label htmlFor="aqua-num">How many aquariums do you have?</label>
        <input
          id="aqua-num"
          name="aqua-num"
          type="number"
          defaultValue={state.amount}
          min={1}
          max={100}
        />
        <button type="submit">{isPending ? "Adding..." : "Add"}</button>
      </form>
    </section>
  );
}
