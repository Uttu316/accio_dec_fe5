Array.prototype.at = function at(pos) {
  if (pos < 0) {
    pos = this.length + pos;
  }

  return this[pos];
};

const arr = ["A", "B", "C", "D", "E"];

const v = arr.at(-4);

console.log(v);
