const blue = document.getElementById("blue");
blue.addEventListener("drag", (event) => {
  console.log("dragging");
});

blue.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.classList.add("dragging");
  console.log("dragStart");
});
