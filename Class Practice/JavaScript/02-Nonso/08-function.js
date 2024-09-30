function myNumbers() {
  let x = 1;
  while (x < 10) {
    console.log(x++);
  }
}

console.log("first loop");
(myNumbers)();
console.log("second loop");
myNumbers();
console.log("third loop");
myNumbers();
