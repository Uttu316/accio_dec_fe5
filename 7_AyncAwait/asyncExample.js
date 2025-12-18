const api = (input) => {
  console.log("D");
  return input + " Hello";
};

console.log("A");

async function getData() {
  console.log("B");

  let name = "ABC";
  let x = api(name);
  console.log("C");
  return x;
}
console.log("E");

getData()
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
console.log("F");
