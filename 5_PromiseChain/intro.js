//first promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 3000);
});

const newP = p
  .then((v) => {
    console.log(v);
    return v + " " + "A";
  })
  .catch((e) => {
    console.log("Error", e);
  })
  .finally(() => {
    console.log("Done");
  });

const anotherP = newP.then((v) => {
  console.log(v);
  return v + 2;
});

anotherP.then((v) => {
  console.log(v);
});
