function api(input) {
  return new Promise((res, reject) => {
    setTimeout(() => {
      let value = input + " Hello";
      reject(value);
    }, 3000);
  });
}

async function getData() {
  try {
    const name = prompt("Enter username");

    const output = await api(name); // await makes getData rest of code wait until the api promise not settle

    const final = await api(output);
    console.log(final);
  } catch (e) {
    console.log("Error", e);
  }
}

getData();
