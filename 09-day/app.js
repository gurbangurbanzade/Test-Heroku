let arr = [
  {
    fname: "aqil",
    lName: "ata",
    hobbies: ["walking", "playing"],
  },
  "kanan",
  35,
  new Map(),
  [[2, 3]],
];

function copyArr(x) {
  let array = [];
  let array1 = [];
  let array2 = [];

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] !== "object") {
      array1[i] = x[i];
    } else {
      array2[i] = x[i];
    }
  }
  array = [array1, array2];
  return array;
}

console.log(arr);
console.log(copyArr(arr));
arr[2] = 40;
arr[4][0] = 1;
console.log(arr);
// console.log(copyArr(arr));

function topla(a, b) {
  let c = a + b;
  console.log(c);
}

let c = topla(1, 2);
