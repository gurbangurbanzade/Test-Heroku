let add = document.querySelector("#add-button");
let input = document.querySelector("#todo-input");
let toDoList = document.querySelector("#todo-list");
let array = [];
input.addEventListener("click", function () {
  add.disabled = false;
});
//----------------------------------Add
add.addEventListener("click", function () {
  if (add.innerText == "Add") {
    array.push({ id: array.length, listText: input.value });
    //----------------------------------------
    let editBtn = document.createElement("button");
    let cancelBtn = document.createElement("button");
    let h2 = document.createElement("h2");
    let deleteBtn = document.createElement("button");
    let editGeneral = document.createElement("button");
    editGeneral.innerHTML = "Edit";
    let listItem = document.createElement("li");
    deleteBtn.innerHTML = "X";
    editBtn.innerHTML = "Edit";
    cancelBtn.innerHTML = "Cancel";
    array.forEach((item) => {
      toDoList.appendChild(listItem);
      listItem.appendChild(h2);
      listItem.appendChild(deleteBtn);
      listItem.appendChild(editBtn);
      listItem.appendChild(cancelBtn);
      h2.innerText = item.listText;
      listItem.id = `${item.id}`;
      cancelBtn.style.display = "none";

      //--------------------------------------Remove List Item
      deleteBtn.addEventListener("click", function () {
        deleteBtn.parentElement.remove();
        input.value = "";
      });
      //--------------------------------------Edit List Item
      editBtn.addEventListener("click", function () {
        input.value = this.parentElement.children[0].innerText;
        add.innerText = "Edit";
        editBtn.disabled = true;
        cancelBtn.style.display = "block";
      });
      //--------------------------------------Cancel List Item
      cancelBtn.addEventListener("click", function () {
        input.value = "";
        editBtn.disabled = false;
        this.style.display = "none";
        add.innerText = "Add";
      });
    });
  } else {
  }
  input.value = "";
});
