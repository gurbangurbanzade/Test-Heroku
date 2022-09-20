function debounce(callback, delay, immediate = false) {
  // Write your code here.
  console.log("salam");
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

let save = () => {
  console.log("Saving data");
};

debounce(save, 2000);

// function debounce(func, timeout = 300) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, timeout);
//   };
// }

// const processChange = debounce(() => saveInput());
