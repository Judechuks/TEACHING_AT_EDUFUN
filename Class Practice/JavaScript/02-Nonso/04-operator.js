let a = 2; // assignmnent operator
let b = a + a; // arithmetic operator
let c = b - a; // arithmetic operator
let d = 2 * b; // arithmetic operator
let e = b / 2; // arithmetic operator
console.log("a = ", a);
console.log("b = ", a + " + " + a, "which is ", b);
console.log("c = ", b + " - " + a, "which is ", c);
console.log("d = ", 2 + " * " + b, "which is ", d);
console.log("e = ", b + " / " + 2, "which is ", e);

f = e++;
console.log("Increment of", f, "is", e);
f = e--;
console.log("Decrement of", f, "is", e);

// modulus (remainder) %
c = 5 % 2;
console.log("5 % 2 is", c);

// Relational operator <, >, ==, >=, <=, !=
console.log("2 < 4", 2 < 4);
console.log("6 > 3", 6 > 3);
console.log("6 equal to 3", 6 == 3);
console.log("6 is greater than or equal to 3", 6 >= 3);
console.log("6 is less than or equal to 3", 6 <= 3);
console.log("6 is not equal to 3", 6 != 3);
