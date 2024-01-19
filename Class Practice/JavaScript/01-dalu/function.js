function areaOfATriangle(a, b) {
  // parameter
  const area = 0.5 * a * b;
  return area;
}

console.log(areaOfATriangle(6, 9)); // argument

function quadracticEquation(a, b, c) {
  // formular = (-b+-sqrt(-b*-b - 4 * a * c)) / 2 * a
  const x1 = ((-b + Math.sqrt(-b * -b - 4 * a * c)) / 2) * a;
  const x2 = ((-b - Math.sqrt(-b * -b - 4 * a * c)) / 2) * a;
  console.log("first value", x1);
  console.log("second value", x2);
}

quadracticEquation(2, 3, 1);
// Math.sqrt(4) // to check for square root
// Math.pow(4, 2); // to check for raised to the power

// Arrow function
const dalu = (a, b, c) => {
  const x1 = (-b + Math.sqrt(Math.abs(-b * -b - 4 * a * c))) / (2 * a);
  const x2 = (-b - Math.sqrt(Math.abs(-b * -b - 4 * a * c))) / (2 * a);
  console.log("first value", x1);
  console.log("second value", x2);
};
dalu(2, 3, 6);

/* ASSIGNMENT 
write a function that accepts user's first name and last name, 
contatenate it and converts it into an uppercase letter
*/
