Array.prototype.forEach = null; // assumption

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

let arr = ["A", "B", "C"];
arr.forEach((item, index, array) => {
  console.log(item);
});
