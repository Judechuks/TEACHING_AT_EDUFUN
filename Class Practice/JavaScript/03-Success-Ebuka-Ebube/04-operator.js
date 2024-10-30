// Assignment operator "="
let a = 2;
let b = 3;
let c = 4;
// let a = 2, b = 3, c = 4;

// Arithmetic Operator
// i. addition "+"
let d = a + b;
// console.log(a + b);
console.log(a + " + " + b + " = " + d);

// ii. Subtraction "-"
let e = c - b;
console.log(c + " - " + b + " = " + e);

// iii. Multiplication "*"
let f = c * 2;
console.log(f);

// iv. Division "/"
let g = c / a;
// console.log(c, " / ", a, " = ", g);
console.log(c + " / " + a + " = " + g);

// v. Modulus "%"
let h = c % 2;
console.log(c + " / " + "2 remainder of " + h);

// vi. Raised to the power "**"
let answer = c ** b;
console.log(c + " raised to the power of " + b + " = " + answer);

// Increment "++" e.g a++ or ++a
let i = 2;
console.log("before increment, i = ", i);
++i; // or i++
console.log("after increment, i = ", i);

// Decrement "--" e.g a-- or --a
console.log("before decrement, i = ", i);
--i; // or i--
console.log("after decrement, i = ", i);

// Concatenator "+"
// let name = "Success" + " " + "Ebuka";
let fullname = "Ebuka " + "Success";
console.log(fullname);

// Operator Precedence - BODMAS, '(), *, /, +, -'
let j = 2 + 3 * 4 - 2; // answer is 12 because multiplication happened first before addition and subtraction
let k = (2 + 3) * 4 - 2; // answer is 18 because the bracket had to be treated first then multiplication and substraction
console.log(j);
console.log(k);

true && console.log("The result is true");
