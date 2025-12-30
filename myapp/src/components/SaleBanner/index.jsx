import { useEffect, useState } from "react";

const SaleBanner = () => {
  //when this component mounted?
  //when the component unmounted?

  const [salePercentage, setSalePercentage] = useState(20);

  const loadData = async () => {
    console.log("loading data...");
  };
  useEffect(() => {
    console.log("Sale banner has mounted");
    loadData();

    return () => {
      //cleanup function
      console.log("Sale banner has unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Sale Banner has updated");
  }, [salePercentage]);

  return (
    <div>
      <h1>SALE</h1>
      <p>Up to {salePercentage}% off</p>
      <button onClick={() => setSalePercentage(salePercentage + 5)}>
        Update the sale percentage
      </button>
    </div>
  );
};

export default SaleBanner;
