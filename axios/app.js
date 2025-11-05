let url = "https://catfact.ninja/fact";

// this will give pending response because of unsuccessful api calls
// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//   } catch (e) {
//     console.log("err-", e);
//   }
// }

// implement the above thing using axios

async function getFacts() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
  } catch (e) {
    console.log("err-", e);
  }
}
