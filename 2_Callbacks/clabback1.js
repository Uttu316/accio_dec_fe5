let x = 2;

function abc(callback) {
  let y = 3;

  let z = callback(x) + callback(y);

  return z;
}

function sq(x) {
  return x * x;
}

const value = abc(sq);

console.log(value);
