const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});

const p2 = p.then((message) => {
  console.log(message);

  return message + 3;
});

const p3 = p2.then((message) => {
  console.log(message);

  return message * 2;
});

p3.then((message) => {
  console.log(message);
});
