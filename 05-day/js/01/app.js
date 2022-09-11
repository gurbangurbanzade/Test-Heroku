let addToast = document.querySelector("#add-button");
let clearToast = document.querySelector("#clear-button");
let succes = document.querySelector("#success");
let error = document.querySelector("#error");
let textArea = document.querySelector("#message-content");
let messageBox = document.querySelector("#toast");
let message = document.querySelector("#message");
let cancelable = document.querySelector("#cancelable");

addToast.addEventListener("click", function () {
  const div = document.createElement("div");
  div.className = "toast success-toast";
  const p = document.createElement("p");
  p.className = "message";
  const button = document.createElement("button");
  button.className = "cancel-button";
  const textnode = document.createTextNode(`${textArea.value}`);
  const textnodeBtn = document.createTextNode("X");
  button.appendChild(textnodeBtn);
  p.appendChild(textnode);
  div.appendChild(p);
  div.appendChild(button);

  setTimeout(() => {
    // document.querySelectorAll(".toast").style.display = "none";
    for (let item of document.querySelectorAll(".toast")) {
      item.style.display = "none";
      break;
    }
    console.log();
  }, 1000);
  if (cancelable.checked) {
    div.classList.remove("error-toast");
    div.classList.add("success-toast");
    document.getElementById("toasts").appendChild(div);
    div.lastElementChild.style.display = "none";
    // button.style, (display = "none");
  }
  if (succes.checked) {
    div.classList.remove("error-toast");
    div.classList.add("success-toast");
    document.getElementById("toasts").appendChild(div);
  }
  if (error.checked) {
    div.classList.remove("success-toast");
    div.classList.add("error-toast");
    document.getElementById("toasts").appendChild(div);
  }
  textArea.value = "";

  button.addEventListener("click", function () {
    button.parentElement.remove();
  });
});

clearToast.addEventListener("click", function () {
  document.getElementById("toasts").textContent = "";
});
