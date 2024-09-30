// let customer_name = prompt("Your Name");
// let gender = prompt("Your Gender");

// if (gender >= "female") {
//   alert("Welcome Mrs. " + customer_name);
// } else if (gender == "Female") {
//   alert("Welcome Mrs. " + customer_name);
// }
// else if (gender == "FEMALE"){
//   alert("Welcome Mrs. " + customer_name);
// }

/*
A = 70 to 100
B = 58 to 69
C = 40 to 57
D = 31 to 39
E = 30 below
*/

// let student_name = prompt("Your Name");
// let score = prompt("Your Score");
// if (score >= 70) {
//   alert(student_name + " you have an A");
// } else if (score >= 58) {
//   alert(student_name + " you have a B");
// } else if (score >= 40) {
//   alert(student_name + " you have a C");
// } else if (score >= 31) {
//   alert(student_name + " you have a D");
// } else {
//   alert(student_name + " you have an E");
// }

let student_name = prompt("Your Name");
let score = prompt("Your Score");
if (score >= 70) {
  alert(student_name + " you have an A");
}
if (score >= 58) {
  alert(student_name + " you have a B");
} else if (score >= 40) {
  alert(student_name + " you have a C");
} else {
  alert(student_name + " you have a D");
}

if (score >= 0) {
  alert(student_name + " you have an E");
}
