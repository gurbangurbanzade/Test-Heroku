let form = document.querySelector(".btn");
let input = document.querySelectorAll(".in");
let len = document.querySelector(".len");
let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let tt = document.querySelector(".text");

const alphaLow = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const alphaUp = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const ascii = [
  " ",
  "",
  "!",
  '"',
  "$",
  "#",
  "%",
  "&",
  "(",
  "'",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "",
];
console.log(ascii.length);

let arr = [];
form.addEventListener("click", function (e) {
  e.preventDefault();
  //   arr.length = len.value;
  for (item of input) {
    console.log(item);
    if (item.checked) {
      console.log(item.className);
      if (item.className.includes("up")) {
        let randomNum = Math.floor(Math.random() * 26);
        arr.push(alphaUp[randomNum]);
      }
      if (item.className.includes("low")) {
        let randomNum = Math.floor(Math.random() * 26);
        arr.push(alphaLow[randomNum]);
      }
      if (item.className.includes("num")) {
        let randomNum = Math.floor(Math.random() * 10);
        arr.push(arrNum[randomNum]);
      }
      if (item.className.includes("sym")) {
        let randomNum = Math.floor(Math.random() * 28);
        arr.push(ascii[randomNum]);
      }
    }
  }
  if (arr.length < len.value) {
    let x = Number(len.value) - Number(arr.length);
    console.log(x);
    for (let i = 0; i < x; i++) {
      let randomNum = Math.floor(Math.random() * 26);
      arr.push(alphaLow[randomNum]);
    }
  }

  console.log(arr);
  tt.value = arr.join("");
  arr = [];
});

let copy = document.querySelector(".copy");
copy.addEventListener("click", function (e) {
  e.preventDefault();
  let textCopy = tt.value;
  navigator.clipboard.writeText(textCopy).then(() => {
    // Alert the user that the action took place.
    // Nobody likes hidden stuff being done under the hood!
    alert("Copied to clipboard");
  });
});
