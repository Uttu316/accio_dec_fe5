const p = Promise.resolve(2);

p.then((v) => {
  console.log(v);
  throw "Oops";
})
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
