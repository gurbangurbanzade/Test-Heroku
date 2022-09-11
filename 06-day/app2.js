let start = document.querySelector(".btnStart");
let at1 = document.querySelector(".at1");
let at2 = document.querySelector(".at2");
let at3 = document.querySelector(".at3");
let interval1 = 0;
let interval2 = 0;
let interval3 = 0;

console.log(typeof parseInt(Math.random().toFixed()));
start.addEventListener("click", function () {
  let timeInterval = setInterval(() => {
    interval1 += parseInt(Math.random().toFixed() * 100);
    at1.style.left = `${interval1}px`;
    interval2 += parseInt(Math.random().toFixed() * 100);
    at2.style.left = `${interval2}px`;
    interval3 += parseInt(Math.random().toFixed() * 100);
    at3.style.left = `${interval3}px`;
    console.log(interval1);
    if (interval1 == 1800) {
      document.querySelector(".text").innerHTML = "1-ci At Qazandi";
      clearInterval(timeInterval);
    }
    if (interval2 == 1800) {
      document.querySelector(".text").innerHTML = "2-ci At Qazandi";
      clearInterval(timeInterval);
    }
    if (interval3 == 1800) {
      document.querySelector(".text").innerHTML = "3-cu At Qazandi";
      clearInterval(timeInterval);
    }
  }, 500);
});
