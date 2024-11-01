let fruits = ["Orange", "Mango", "Banana", "Pineapple"];
for (const fruit in fruits) {
  console.log(fruits[fruit]);
}

// Solution to Assignment
let evenNumbers = [2, 4, 6, 8, 10, 12];
for (const index in evenNumbers) {
  evenNumbers[index] = evenNumbers[index] + 1;
}
console.log(evenNumbers);
