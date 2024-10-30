const fullname = prompt("What is your name?: ");
// const gender = prompt("What is your gender?: ");
// const age = parseInt(prompt("How old are you?: "));
const score = parseInt(prompt("What is your test score?: "));

// if (gender == "male") {
//   alert("Welcome to the bortherhood " + fullname);
// }

// if (gender == "male") {
//   alert("Welcome to the bortherhood " + fullname);
// } else {
//   alert("Sorry " + fullname + " This is for the niggas");
// }

// if (age >= 18 && age <= 30) {
//   alert("Welcome " + fullname);
// } else {
//   alert("Sorry " + fullname + " This is not meant for you");
//   alert("age must be 18 to 30");
// }

// A = 80 to 100, B = 79 to 65, C = 50 to 64, D = 40 to 49, F = 0 to 39
if (score >= 80 && score <= 100) {
  alert("Congratulations! You had an A");
} else if (score >= 65 && score <= 79) {
  alert("Congratulations! You had an B");
} else if (score >= 50 && score <= 64) {
  alert("You passed- with a C");
} else if (score >= 40 && score <= 49) {
  alert("You had a weak pass with grade D");
} else if (score >= 0 && score <= 39) {
  alert("Sorry! You Failed");
} else {
  alert("You entered a wrong score");
}

// console.log(5 === "5");
