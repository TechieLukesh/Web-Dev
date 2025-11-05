let h1 = document.querySelector("h1");

// handling everything using promises
// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       console.log(`color changed to ${color}`);
//       resolve("Color changed!");
//     }, delay);
//   });
// }

// handling promise rejection
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // let's generate rejection based on rand no generation
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("Color changed!");
    }, delay);
  });
}

// for frequent change color after sometime, make a function

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }

// for seq. execution we should implement using other function
// function changeColor(color, delay, nextChangeColor) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextChangeColor) nextChangeColor();
//   }, delay);
// }

// after 1 sec->red, then orange then green
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });

// changing the above code into more understandable format using promise methods

// changeColor("red", 1000)
//   .then(() => {
//     console.log("Red color was completed!");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("Orange color was completed!");
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     console.log("Green color was completed!");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     console.log("Blue color was completed!");
//   })
//   .catch(() => {
//     console.log("Failed!");
//   });

// impelementing above things using async-await func

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("orange", 1000);
  } catch (err) {
    console.log("Error caught");
    console.log(err);
  }

  // let we have to perform more such functions
  let a = 5;
  console.log(a);
  console.log("Print add:", a + 4);
}

// we w)ant sequentially
// changeColor("red", 1000);     -> 1
// changeColor("yellow", 2000);  -> 2
// changeColor("orange", 3000);  -> 3
// changeColor("green", 4000);   -> 4

// setTimeout(() => {
//   h1.style.color = "Yellow";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "Orange";
// }, 3000);

// setTimeout(() => {
//   h1.style.color = "Green";
// }, 4000);
