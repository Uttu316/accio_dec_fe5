//tanuja
import myMain, { myName, updateName } from "./a.js";

import * as A from "./a.js"; // combined all the exports in one object
console.log(A);
console.log(myName);

const value = updateName("Hello");

console.log(value);

myMain();
