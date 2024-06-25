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
