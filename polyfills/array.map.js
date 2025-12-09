if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    let resultArray = [];

    for (let i = 0; i < this.length; i++) {
      resultArray.push(callback(this[i], i, this));
    }

    return resultArray;
  };
}

let arr = ["A", "B", "C"];

const newArray = arr.map((item, index, array) => {
  return item + index;
});

console.log(newArray); // Output: ["A0", "B1", "C2"]
