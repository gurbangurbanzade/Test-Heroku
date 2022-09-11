let text = "Frontend PYP Bootcamp"; //21

let newText;
newText = text.toLocaleLowerCase();
newText = text.toUpperCase();

newText = text.length;

let newText2;

newText = text.slice(2, 6);
newText2 = text.substring(2, 6);
newText = text.slice(2);
newText2 = text.substring(2);

newText = text.slice(-5);
newText2 = text.substring(-5);
newText = text.slice(-10, -5);
newText2 = text.substring(-10, -5);

newText = text.slice(7, 3);
newText2 = text.substring(7, 3);

// newText = text.slice(2, 6);
newText = text.substr(2, 5);
newText2 = text.substring(2, 5);

newText = text.substr(2);
newText = text.substr(-5, -4);

newText = text.substr(2, 5);
newText = text.trimEnd();
newText = text.trimStart();

newText = text.indexOf("o");

// newText = text.split("n");

// newText = text.charAt(1);

// newText = text.endsWith("w");
// newText = text.startsWith("F");

// newText = text.includes("PYP");

// newText = text.repeat(5);

// newText = text.padEnd(5, ".");

// newText = text.slice(-4);
// newText = newText.padStart(28, "#");

console.log(newText);
console.log(newText2);

String.prototype.custoMethod = function (str, index) {
  //   console.log(this);
  //   console.log(str);
  //   console.log(index);

  for (let i = 0; i < this.length; i++) {
    // console.log(this[i]);
    if (str == this[i] && i == index) {
      return true;
    } else {
      return false;
    }
  }
  //   return false;
};

let names = "qurban";

console.log("name---" + names.custoMethod("q", 0));
text = 2;
let a = text.toString();
console.log(typeof a);
