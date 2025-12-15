const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("A");
  }, 2000);
}); // 2s A

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("B");
  }, 3000);
}); // 3s B

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("C");
  }, 1500);
}); // 1.5s C

const p = Promise.race([p1, p2, p3]);

p.then((output) => {
  console.log(output);
}).catch((e) => {
  console.log("Error", e);
});
