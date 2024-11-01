// Example

let x = 7;
let y = "8";
y = parseInt(y, 10);

// the parseInt(value, radix) method forces/coercion of the argument 'value' into a number where the 'radix' specifies the base of the number, in this case 'decimal'
let z = x + y;
console.log(x + " + " + y);
console.log("Answer: " + z);

let value = "Bob";
// isNaN(value) method is used to check if a value is a number. (is Not a Number). It returns 'true' if it is not a number and returns 'false' otherwise.
console.log('"' + value + '"' + " is not a number: " + isNaN(value));
console.log(parseFloat("50Years")); // returns 50
console.log(parseFloat("He is 50")); // returns NaN

// age = "45";
// age = Number(age);
// age = parseInt(prompt("How old are you?"), 8);
// my_brother_age = 2 + age;
// console.log(my_brother_age);

your_name = prompt("What is your name?: ");
age = parseInt(prompt("How old are you?: "));
if (isNaN(age)) {
  age = parseInt(prompt("How old are you? (in numbers only): "));
}
console.log("Welcome", your_name, "you are", age, "years old");

// Assignment:
// Create a delivery Site
// Ask for user's name, what they want to order, how many quantity, and their address,
// Your display with a pop should look like this:
// Welcome Jude you ordered 20 meatpies which costs $20 and it will be forwarded to your address 20 ridge road, onitsha
