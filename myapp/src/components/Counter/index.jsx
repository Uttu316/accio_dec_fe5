import { useState } from "react";
import styles from "./Counter.module.css";
const Counter = () => {
  //   let count = 0;

  const [count, setCount] = useState(0);
  const onAdd = () => {
    setCount(count + 1);
    setCount(count + 1); //+2
    // document.getElementById("counter").innerHTML = count;
  };
  const onMinus = () => {
    setCount((currValue) => currValue - 1); // callback way to update the state
    setCount((currValue) => currValue - 1); //-1

    // document.getElementById("counter").innerHTML = count;
  };

  return (
    <div className={styles.counter}>
      <h3 className={styles.counterTitle}>Counter</h3>
      <p className={styles.counterDisplay} id="counter">
        {count}
      </p>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.counterButton} ${styles.addButton}`}
          onClick={onAdd}
        >
          Add
        </button>
        <button
          className={`${styles.counterButton} ${styles.minusButton}`}
          onClick={onMinus}
        >
          Minus
        </button>
      </div>
    </div>
  );
};
export default Counter;
