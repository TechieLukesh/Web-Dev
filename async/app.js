// async function greet() {
//   throw "Weak Connection!";
//   return "hello";
// }

// greet()
//   .then((res) => {
//     console.log("Promise was resolved!");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Promise was resolved with error:", err);
//   });

// making arrow function into async func

// arrow func
// let demo = () => {
//   console.log("Hello!");
// };

// arrow async func
// let demo = async () => {
//   console.log("Hello!");
// };

// await keyword

// make an asynchronous func using promise to return any rand no
// function getNum() {
//   return new Promise((resolve, reject) => {
//     let num = Math.floor(Math.random() * 10) + 1;
//     return num;
//   });
// }

// make the above func async

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

// this calls 'n' times getNum(), and prints altogether after 1 sec
// to get all the prev work done then only next work done, we should use await keyword
async function demo() {
  await getNum();
  await getNum();
  // the above await will print the 2 rand number in 1-1 sec gap then 3rd call will be executed!
  getNum();
}
