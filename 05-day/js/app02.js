fetch("https://northwind.vercel.app/api/orders")
  .then((response) => response.json())
  .then((products) => {
    let say = 0;
    for (let i = 0; i < products.length; i++) {
      if (products[i].customerId == "FOLKO") {
        console.log(products[i].details);

        say += products[i].details.length;
        sum2 = 0;
        sum2 +=
          products[i].details.unitPrice *
          (1 - products[i].details.discount) *
          products[i].details.quantity;
      }
    }
    console.log(sum2);
  });
