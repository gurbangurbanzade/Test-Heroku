let add = document.querySelector("#add-button");
let input = document.querySelector("#todo-input");

let toDoList = document.querySelector("#todo-list");

input.addEventListener("click", function () {
  add.disabled = false;
});
// add etmek-------------------------------------
add.addEventListener("click", function () {
  let array = [];
  array.push({ prod: input.value });
  console.log(array);

  let editBtn = document.createElement("button");
  let cancelBtn = document.createElement("button");
  let h2 = document.createElement("h2");
  if (this.innerText == "Add" && input.value !== "") {
    let deleteBtn = document.createElement("button");
    let editGeneral = document.createElement("button");
    editGeneral.innerHTML = "Edit";
    let listItem = document.createElement("li");
    deleteBtn.innerHTML = "X";
    editBtn.innerHTML = "Edit";
    cancelBtn.innerHTML = "Cancel";
    toDoList.appendChild(listItem);
    listItem.appendChild(h2);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    listItem.appendChild(cancelBtn);

    deleteBtn.classList.add("delete-button");
    h2.innerHTML = input.value;
    deleteBtn.addEventListener("click", function () {
      console.log(this.parentElement);
      this.parentElement.remove();
    });
    input.value = "";
  }
  // edit etmek-------------------------------------

  editBtn.addEventListener("click", function () {
    add.id = "edit";
    input.value = h2.innerHTML;
    add.innerText = "EDIT";
    editBtn.disabled = true;
    // Genereal edit etmek-------------------------------------

    add.addEventListener("click", function (e) {
      e.preventDefault();
      if (input.value) {
        h2.innerHTML = input.value;
        add.id = "add-button";
        let H2 = document.querySelectorAll("h2");
        for (let item of H2) {
          if (item.innerText == "") {
            item.parentElement.remove();
          }
          // item.parentElement.style.display = "none";
          // console.log(item.parentElement);
        }
        input.value = "";
        editBtn.disabled = false;
      }
    });
    cancelBtn.addEventListener("click", function () {
      input.value = "";
      add.id = "add-button";
      add.innerText = "Add";

      editBtn.disabled = false;
    });
  });
  add.innerText = "Add";
});
