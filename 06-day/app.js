let text = "Frontend PYP Bootcamp";
let newText = text.toLowerCase();

newText = text.toUpperCase();
newText = text.length;
newText = text.indexOf("1");

newText = text.slice(-10, -5);
newText = text.slice(-5);

newText = text.substr(2, 6);

let newText2 = text.substring(2, 6);

newText = text.replace("PYP", "pyp");

String.prototype.customMethod = function (str, index) {
  for (let i = 0; i < this.length; i++) {
    if (str == this[i] && index == i) {
      return true;
    } else {
      return false;
    }
  }
};

newText = text.customMethod("f", 0);

console.log(newText);
// console.log(newText2);
