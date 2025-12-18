console.log("A");
function api(input) {
  console.log("B");
  return new Promise((res, reject) => {
    console.log("C");
    setTimer(() => {
      let value = input + " Hey";
      res(value);
      console.log("D");
    }, 3000);
  });
}

console.log("E");
api("ABC")
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
console.log("F");
