console.log("A");
const getEmoji = () => {
  console.log("B");
  return new Promise((resolve, reject) => {
    console.log("C");

    const name = prompt("Enter user name"); //ABC

    const emojis = ["😝", "🤬", "💩", "☠️", "😈", "🤑", "🤥", "😭", "🥰"];

    const emoji = emojis[Math.floor(Math.random() * 10) % emojis.length];

    if (name && emoji) {
      resolve({ name, emoji });
    } else {
      reject("OOps");
    }
    console.log("F");
  });
};
console.log("D");

getEmoji()
  .then((data) => {
    const { name, emoji } = data;
    console.log(`${name} is ${emoji}`); // ABC is emoji
  })
  .catch((err) => {
    console.log(err);
  });
console.log("E");
//ABC,emoji
