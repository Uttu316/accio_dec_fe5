console.log("A");
function getData(username, onSuccess, onFailure) {
  console.log("B");

  setTimeout(() => {
    console.log("C");
    if (username === "abc") {
      let data = {
        name: "AbC",
        userid: "1321",
      };
      onSuccess(data);
    } else {
      onFailure("User not found");
    }
    console.log("D");
  }, 3000);
  console.log("E");
}
console.log("F");

getData(
  "abc",
  (user) => {
    console.log("User data", user);
  },
  (err) => {
    console.log(err);
  }
);
console.log("G");
