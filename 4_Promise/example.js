//task ,resolve=then, reject=catch
const p = new Promise((resolve, reject) => {
  //sync
  let money = 0;
  setTimeout(() => {
    //async
    while (money < 10000000) {
      money++;
    }
    if (money >= 10000000) {
      resolve(money);
    } else {
      reject("Oops");
    }
  }, 5000);
});

//then: successfull
//catch: failure
p.then((money) => {
  console.log("Marry You with", money);
}).catch((reason) => {
  console.log("Break up", reason);
});
