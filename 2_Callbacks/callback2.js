console.log("A");
function getdata(username, onSuccess, onFailure) {
  console.log("B");

  if (username === "abc") {
    let data = {
      name: "ABC",
      userId: "1213",
    };
    onSuccess(data);
  } else {
    onFailure("user not found");
  }
  console.log("C");
}
console.log("D");

getdata(
  "xyz",
  (user) => {
    console.log("User data", user);
  },
  (err) => {
    console.log(err);
  }
);
console.log("E");
