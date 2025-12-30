import { useState } from "react";
import SaleBanner from ".";

const SaleController = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <h2>{isVisible ? "Hide" : "Show"} Sale Banner</h2>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Banner</button>

      {isVisible && <SaleBanner />}
    </div>
  );
};
export default SaleController;
