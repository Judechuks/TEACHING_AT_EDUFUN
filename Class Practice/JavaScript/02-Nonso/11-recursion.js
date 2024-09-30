// let counter = 0;
// function timeout() {
//   setTimeout(function () {
//     console.log("Hi", counter++);
//   }, 2000);
//   timeout();
// }
// timeout();

function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  }
  return 1;
}
let number = parseInt(prompt("Enter a number to check its factorial"));

// console.log(`The factorial of ${number} is ${factorial(number)}`);
console.log(`${number}! = ${factorial(number)}`);
alert(`${number}! = ${factorial(number)}`);
