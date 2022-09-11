fetch("https://northwind.vercel.app/api/orders")
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    console.log(
      "--------------------------------------Sual3--------------------------------------"
    );

    // for (let i = 0; i < products.length; i++) {
    //   if (products[i].employeeId == 5) {
    //     for (let j = 0; j < products[i].details.length; j++) {

    //  if(products[i].orderDate){}
    //     }
    //   }
    // }

    console.log(
      "------------------------------sual2--------------------------------------"
    );
    //////////////////////////////////////////////////////////////////////////////////////////
    let sum2 = 0;
    let diff = 100000;
    let enAz = 0;
    let enAzId = 0;
    let sevimli = 0;
    let sevimliId;
    for (let i = 0; i < products.length; i++) {
      if (products[i].employeeId == 5) {
        for (let j = 0; j < products[i].details.length; j++) {
          sum2 = 0;
          // console.log(products[i].details);
          sum2 =
            sum2 +
            products[i].details[j].unitPrice *
              (1 - products[i].details[j].discount) *
              products[i].details[j].quantity;
          if (sum2 > sevimli) {
            sevimli = sum2;
            sevimliId = products[i].id;
          } else if (sum2 < diff) {
            enAz = sum2;
            enAzId = products[i].id;
          }
        }
      }
    }
    console.log("Sevimli - " + sevimli.toFixed());
    console.log("sevimli id ----" + sevimliId);

    console.log("sevimsiz cem - " + enAz.toFixed());
    console.log("sevimsiz ID - " + enAzId);
    ("-------------------------sual1--------------------------------------");

    //////////////////////////////////////////////////////////////////////////////////////////////////
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      if (products[i].employeeId == 5) {
        for (let j = 0; j < products[i].details.length; j++) {
          // console.log(products[i].details);
          sum =
            sum +
            products[i].details[j].unitPrice *
              (1 - products[i].details[j].discount) *
              products[i].details[j].quantity;
        }
      }
    }
    console.log("Sual 1- " + sum.toFixed());
  });

// let arr = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].discontinued) {
//     arr.push(products[i]);
//   }
// }
// let array = arr.sort((a, b) => a.unitPrice - b.unitPrice);
// console.log(array);

// let count = 0;
// let cem = 0;
// for (let i = 0; i < products.length; i++) {
//   if (products[i].name.toLocaleLowerCase().includes("x")) {
//     count++;
//   }
// }
// console.log("Say - " + count);

// let count = 0;
// let cem = 0;
// for (let i = 0; i < products.length; i++) {
//   if (products[i].unitsInStock < 20) {
//     cem += products[i].unitPrice;
//     count++;
//   }
// }
// console.log("Unitstock 20 ali - " + cem / count);

// console.log("category id 3 olan- " + count);
// //////////////////////////////////
// let products2 = products.filter((i) => {
//   if (i.name[0] == "A" || i.name[0] == "a") {
//     console.log("A ile baslayan- " + i.name);
//   }
// });
// //////////////////////////////////
// for (let i = 0; i < products.length; i++) {
//   if (products[i].name[0] == "A" || products[i].name[0] == "a") {
//     console.log("A ile baslayan- " + products[i].name);
//   }
// }
//////////////////////////////////
// let count = 0;
// for (let i = 0; i < products.length; i++) {
//   if (products[i].categoryId == 3) {
//     count++;
//   }
// }
// console.log("category id 3 olan- " + count);
//////////////////////////////
// console.log("product- " + products.length);
