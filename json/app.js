// let req =
//   '{"fact":"Blue-eyed, white cats are often prone to deafness.","length":50}';

// let validReq = JSON.parse(req);

// console.log(validReq);

let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    return res.json(); // paring the response into readable json format
  })
  .then((data) => {
    console.log("data1=", data.fact); // if parsed the above, then print the fact
    return fetch(url); // again call for the next data
  })
  .then((res) => {
    return res.json();
  })
  .then((data2) => {
    console.log("data2=", data2.fact);
    return fetch(url);
  })
  .then((data3) => {
    console.log("data3=", data3.fact);
  })
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log("Error-", err);
  });
