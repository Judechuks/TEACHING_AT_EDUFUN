/*
// Sign up
let fullName = prompt("Enter your name");
let email = prompt("Enter your Email");
let newPassword = prompt("Type in your new password");
let confirmPassword = prompt("Re-Enter password again");

while (newPassword !== confirmPassword) {
  confirmPassword = prompt("Password did not match Re-Enter password again");
}

// Log in
let userEmail = prompt("Your Email");
let userPassword = prompt("Your Password");
while (userEmail !== email || newPassword !== userPassword) {
  userEmail = prompt("Did not match Re-Enter your Email");
  userPassword = prompt("Did not match Re-Enter your Password");
}
*/

// Sign up With localStorage
let fullName = prompt("Enter your name");
let email = prompt("Enter your Email");
let newPassword = prompt("Type in your new password");
let confirmPassword = prompt("Re-Enter password again");

while (newPassword !== confirmPassword) {
  confirmPassword = prompt("Password did not match Re-Enter password again");
}

const person = {
  fullName,
  email,
  password: confirmPassword,
};

// set the persons data as string and send it to the localStorage
localStorage.setItem("signupdemo", JSON.stringify(person));
