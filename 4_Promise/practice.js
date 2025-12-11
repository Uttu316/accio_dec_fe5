console.log("A");

const p = new Promise((resolve, reject) => {
  //sync
  console.log("B");

  setTimeout(() => {
    //async
    console.log("C");
    let x = 2;
    if (x % 2 == 0) {
      resolve("Even");
    } else {
      reject("Odd");
    }
    console.log("D");
  }, 2000);
  console.log("E");
});
console.log("G");

//async
p.then((o) => {
  console.log(o);
}).catch((e) => {
  console.log(e);
});

console.log("H");
