let start = document.querySelector("#start-button");
let time = document.querySelector("#timer").innerHTML;

let milliSec;

start.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(typeof time);

  milliSec = Number(time.slice(-3));
  setInterval(() => {
    console.log(milliSec + 1);

    console.log("salam");
  }, 1000);
});

// function start(e) {
//   e.preventDefault();
//   console.log("salam");
// }

// setTimeout(greet, 1000);

// setInterval( check), 1000);

// function start(e) {
//   e.preventDefault();
//   console.log("salam");
// }
