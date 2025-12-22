import Footer from "./components/footer";
import Header from "./components/header";
import React from "react";
const App = () => {
  let fname = "Utkarsh";
  let lname = "Gupta";
  let age = 20;

  const user = {
    name: "utkarsh",
    age: 20,
    city: "delhi",
  };

  const getSum = (a, b) => {
    return a + b;
  };

  return (
    <div>
      <Header />
      <h1>Lets Learn react</h1>
      <p>React is a javascript library for building user interfaces.</p>
      {fname + " " + lname} {age}
      <h3>{getSum(4, 6)}</h3>
      <h3>{getSum(10, 22)}</h3>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
        <li>City: {user.city}</li>
      </ul>
      {["apple", "mango", "banana"]}
      {[<p>A</p>, <p>B</p>, <p>C</p>]}
      <Footer />
    </div>
  );
};
export default App;
