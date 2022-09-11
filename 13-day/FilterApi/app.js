let ul = document.querySelector("ul");
let input = document.querySelector("input");

// fetch("https://randomuser.me/api?results=100")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     // data.array.forEach((element) => {});
//   });

async function data() {
  let res = await fetch("https://randomuser.me/api/?results=20");
  let resData = await res.json();
  let arr = [];
  //   console.log(resData.results);
  arr = resData.results;
  resData.results.forEach((element) => {
    console.log(element);
    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    let span = document.createElement("span");
    span.innerHTML = "";
    ul.appendChild(li);
    li.appendChild();
  });
  return arr;
}

data();

let array = data();

input.addEventListener("input", function () {
  console.log("salam");
  for (let item of array) {
    // console.log(typeof item.innerHTML);
    if (!item.innerHTML.includes(input.value)) {
      item.style.display = "none";
      //   console.log(item);
    }
  }
});
