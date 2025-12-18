//tarun
export var myName = "Sachin";

var xy = 2;

console.log(xy);

//named export
export function updateName(value) {
  return myName + value;
}

function main() {
  console.log("main");
}

export default main;
