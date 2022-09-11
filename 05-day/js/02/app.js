let select = document.querySelector("#select");
let option = document.querySelector(".option");
fetch("https://northwind.vercel.app/api/products")
  .then((response) => response.json())
  .then((products) => {
    let option;

    products.forEach((prod) => {
      option = document.createElement("option");
      select.appendChild(option);
      option.innerText = prod.name;
      option.value = prod.id;
    });

    select.addEventListener("change", function (e) {
      console.log(e.target);
      products.filter((item) => {
        if (item.name == e.target.value) {
          console.log(item.name);
        }
      });
    });
  });
