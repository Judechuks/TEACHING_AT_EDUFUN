// Get Password and email from localstorage
const person = JSON.parse(localStorage.getItem("signupdemo"));
const email = person.email;
const confirmPassword = person.password;

// Check for correct userEmail and Password
let userEmail = prompt("Your Email");
let userPassword = prompt("Your Password");
while (userEmail !== email || userPassword !== confirmPassword) {
  alert("Incorrect email or password");
  userEmail = prompt("Re-Enter your Email");
  userPassword = prompt("Re-Enter your Password");
}

// Navigate user to another page
window.location = "projects/todo/index.html";
