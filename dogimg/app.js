let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let link = await getDogImg();
  let img = document.querySelector("#result");
  //   console.log(res);
  // to show the image in place of html tag
  img.setAttribute("src", link);
});

async function getDogImg() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    console.log("Err-", e);
    return "No Image Found!";
  }
}
