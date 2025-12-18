// function getData(){
//     return new Promise((resolve)=>{
//         resolve("Hello")
//     })
// }

// function getData(){
//     return Promise.resolve("Hello")
// }

//async: async keyword return promise from AsyncFun
async function getData() {
  return "Hello";
}

const getconfig = async () => {};

getData().then((v) => {
  console.log(v);
});
