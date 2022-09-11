let input = document.querySelector(".password");
let img = document.querySelector(".bgImg");
// input.addEventListener("change", function () {
//   if (input.value.length > 8) {
//     img.style.filter = "blur(8px)";
//   }
// });

const inputHandler = function (e) {
  let count = 10;
  //   console.log(typeof e.target.value[0]);
  if (e.target.value.length > 8) {
    img.style.filter = "blur(50px)";
    console.log("min 8");
    count -= 2;
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value[i] == e.target.value[i].toUpperCase()) {
        count -= 2;
        img.style.filter = "blur(30px)";
        console.log("Upper");
      }
    }
    for (let i = 0; i < e.target.value.length; i++) {
      if (typeof Number(e.target.value[i]) == "number") {
        count -= 2;
        img.style.filter = "blur(10px)";
        console.log("number");
      }
    }

    for (let i = 0; i < e.target.value.length; i++) {
      if (!isCharacterALetter(e.target.value[i])) {
        console.log("char");
      }
      function isCharacterALetter(char) {
        return /[a-zA-Z]/.test(char);
      }
    }
  }
};
input.addEventListener("input", inputHandler);
