import { useState } from "react";

const Counter = () => {
  //   let count = 0;
  const [count, setCount] = useState(0);
  const onAdd = () => {
    setCount(count + 1);
    // document.getElementById("counter").innerHTML = count;
  };
  const onMinus = () => {
    setCount(count - 1);

    // document.getElementById("counter").innerHTML = count;
  };
  return (
    <div>
      <h3>Counter</h3>
      <p id="counter">{count}</p>
      <button onClick={onAdd}>Add</button>
      <button onClick={onMinus}>Minus</button>
    </div>
  );
};
export default Counter;
