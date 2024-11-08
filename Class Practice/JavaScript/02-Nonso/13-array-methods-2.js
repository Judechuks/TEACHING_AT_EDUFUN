// 8. find() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order, until callbackFn returns a truthy value. find() then returns that element and stops iterating through the array. If callbackFn never returns a truthy value, find() returns undefined.
// find(callbackFn)
// Example: To get the first element that is greater than 10
const found = [5, 12, 8, 130, 44].find((element) => element > 10);
console.log(found); // Expected output: 12

// 9. findIndex() is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order, until callbackFn returns a truthy value. findIndex() then returns the index of that element and stops iterating through the array. If callbackFn never returns a truthy value, findIndex() returns -1.
// Example:
const isLargeNumber = (element) => element > 13;
console.log([5, 12, 8, 130, 44].findIndex(isLargeNumber)); // Expected output: 3

// 10. findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
console.log([5, 12, 50, 130, 44].findLast((element) => element > 45)); // Expected output: 130

// 11. findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// findLastIndex(callbackFn)
const isLargeNum = (element) => element > 45;
console.log([5, 12, 50, 130, 44].findLastIndex(isLargeNum));
// Expected output: 3 which is the Index of element with value: 130

// 12. indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// indexOf(searchElement)
// indexOf(searchElement, fromIndex) -ve index counts from the back
// Example:
const beasts = ["ant", "bison", "camel", "bison", "duck", "duck", "bison"];
console.log(beasts.indexOf("bison")); // Expected output: 1
console.log("find the index of bison starting from index 2");
console.log(beasts.indexOf("bison", 2)); // Start from index 2 // Expected output: 3
console.log(beasts.indexOf("giraffe")); // Expected output: -1 (not found)

// 13. lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex. (descending order)
// 13a. lastIndexOf(searchElement)
// 13b. lastIndexOf(searchElement, fromIndex) - starting from a specified index backwards
const animals = [
  "Tiger",
  "Dodo",
  "Penguin",
  "Tiger",
  "Angle",
  "Tiger",
  "Gabin",
  "Dodo",
];
console.log(animals.lastIndexOf("Dodo")); // Expected output: 6
console.log(animals.lastIndexOf("Tiger")); // Expected output: 3
console.log(animals.lastIndexOf("Tiger", 2)); // Expected output: 0
// The lastIndexOf searches the index 2 and does not get "Tiger" moves to index 1, and finally to index 0.
console.log(animals.lastIndexOf("Tiger", 3)); // Expected output: 3
// since the index 3 contains "Tiger" index 3 is returned.
