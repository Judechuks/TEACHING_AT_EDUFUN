let age = "20"; // string
console.log(age);
console.log(typeof age);
age = age + age;
console.log(age);
// The Number(), parseInt(), and parseFloat() methods are used to coerce or force or convert a string to become a number datatype.
// age = Number(age);
age = parseInt(age);
console.log(age);
console.log(typeof age);
age = age + age;

let answer = prompt("What is your age?: ");
console.log(typeof answer);
answer = parseInt(answer);
console.log(answer);
console.log(typeof answer);

// shorter version
// let answer = parseInt(prompt("What is your age?: "));
// console.log(answer, typeof answer);
