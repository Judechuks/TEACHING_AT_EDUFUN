let fruits = [
  "apple",
  "banana",
  "cashew",
  "eggplant",
  "pineapple",
  "strawberry",
  "guava",
];

fruits[7] = "orange";
// console.log(fruits[3]);
fruits.push("mango");
fruits.unshift("pawpaw", "");
fruits.shift();
fruits.shift();
fruits.pop();
console.log(fruits);
console.log(fruits.length);
