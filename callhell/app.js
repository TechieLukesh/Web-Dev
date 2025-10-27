let h1 = document.querySelector("h1");

// for frequent change color after sometime, make a function

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }

// for seq. execution we should implement using other function
function changeColor(color, delay, nextChangeColor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextChangeColor) nextChangeColor();
  }, delay);
}

// after 1 sec->red, then orange then green
changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("blue", 1000);
      });
    });
  });
});

// we want sequentially
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
