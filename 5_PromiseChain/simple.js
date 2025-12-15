const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});

p.then((message) => {
  console.log(message);
  return message + 3;
})
  .then((message) => {
    console.log(message);
    return message * 2;
  })
  .then((message) => {
    console.log(message);
  })
  .catch((e) => {
    console.log("Errror", e);
  });
