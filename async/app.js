async function greet() {
  throw "Weak Connection!";
  return "hello";
}

greet()
  .then((res) => {
    console.log("Promise was resolved!");
    console.log(res);
  })
  .catch((err) => {
    console.log("Promise was resolved with error:", err);
  });
