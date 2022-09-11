let num = document.querySelectorAll(".number");
let numDot = document.querySelector(".numberDot");
let monitor = document.querySelector("header");
let opr = document.querySelectorAll(".operate");
let result = document.querySelector(".result");
let clear = document.querySelector(".clear");
let change = document.querySelector(".change");
let percent = document.querySelector(".percent");

let arr = [];
let includeArr = [];
let empty = "";
for (let item of num) {
  item.addEventListener("click", function () {
    console.log();
    if (typeof arr[Number(arr.length) - 1] !== "number" && arr.length > 1) {
      includeArr.push(item.innerHTML);
      monitor.innerHTML = includeArr.join("");
      console.log("salam");
    } else {
      monitor.innerHTML += item.innerHTML;
      console.log("1");
    }

    // if (monitor.innerHTML[1] == "." && monitor.innerHTML[0] == 0) {
    //   // monitor.innerHTML += item.innerHTML;
    //   console.log("1");
    // } else if (monitor.innerHTML[0] == 0 && monitor.innerHTML.length !== 1) {
    //   monitor.innerHTML = monitor.innerHTML.replace(0, "");
    //   console.log("2");
    // }
    // else {
    //   monitor.innerHTML += item.innerHTML;
    //   console.log("3");
    // }
  });
}
numDot.addEventListener("click", function () {
  if (monitor.innerHTML.includes(".") || monitor.innerHTML.length == 0) {
  } else {
    monitor.innerHTML += this.innerHTML;
  }
});
for (let item of opr) {
  item.addEventListener("click", function () {
    includeArr = [];
    console.log(cavab);
    console.log(monitor.innerHTML);

    if (monitor.innerHTML == cavab) {
    } else {
      arr.push(monitor.innerHTML);
      arr.push(item.id);
      run();
    }
  });
}
result.addEventListener("click", function () {
  if (monitor.innerHTML == cavab) {
  } else {
    arr.push(monitor.innerHTML);
    arr.push(item.id);
    run();
  }
  //------------------------------

  arr.push(monitor.innerHTML);
  console.log(arr);
  cavab = Number(arr[0]);

  run();
});

clear.addEventListener("click", function () {
  monitor.innerHTML = "";
});
change.addEventListener("click", function () {
  if (Number(monitor.innerHTML) > 0) {
    monitor.innerHTML = 0 - Number(monitor.innerHTML);
  } else if (Number(monitor.innerHTML) < 0) {
    monitor.innerHTML = 0 - Number(monitor.innerHTML);
  }
});

percent.addEventListener("click", function () {
  if (arr.length == 0) {
    monitor.innerHTML = Number(monitor.innerHTML) / 100;
  } else {
    cavab = Number(arr[0]);
    arr.push(monitor.innerHTML);
    let y = arr.length;
    console.log(y);
    arr[y - 1] = (arr[y - 3] * arr[y - 1]) / 100;
    console.log(arr);
    console.log(typeof arr.length);
    run();
  }
});

document.addEventListener("keydown", KeyCheck); //or however you are calling your method
function KeyCheck(event) {
  if (event.keyCode == 8) {
    monitor.innerHTML = monitor.innerHTML.substring(
      0,
      monitor.innerHTML.length - 1
    );
    console.log("salam");
  }
}
let cavab;
function run() {
  cavab = Number(arr[0]);
  console.log(arr);
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] == "+") {
      cavab = cavab + Number(arr[i + 1]);
      console.log(cavab);
      monitor.innerHTML = cavab;
    }
    if (arr[i] == "−") {
      cavab = cavab - Number(arr[i + 1]);
      console.log(cavab);
      monitor.innerHTML = cavab;
    }
    if (arr[i] == "÷") {
      cavab = cavab / Number(arr[i + 1]);
      console.log(cavab);
      monitor.innerHTML = cavab;
    }
    if (arr[i] == "×") {
      cavab = cavab * Number(arr[i + 1]);
      console.log(cavab);
      monitor.innerHTML = cavab;
    }
  }

  //   console.log(cavab);
  // monitor.innerHTML = cavab;
}
