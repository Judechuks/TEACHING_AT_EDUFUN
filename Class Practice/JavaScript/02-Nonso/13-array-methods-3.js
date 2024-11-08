// 14. flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// 14a. flat(). depth default is 1
// 14b. flat(depth). depth = The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
// Return Value: A new array with the sub-array elements concatenated into it.
// Examples:
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // Expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [3, 4, 5, 6], [3, 4, 5, 8]];
console.log(arr2.flat()); // Expected output: Array [0, 1, 2, 3, 4]

const arr3 = [
  1,
  2,
  [
    [3, 4],
    [5, 6, 7],
  ],
];
console.log(arr3.flat()); // Expected output: Array [0, 1, 2, Array [3, 4] , Array[5,6,7]]
console.log(arr3.flat(2)); // Expected output: Array [0, 1, 2, 3, 4, 5, 6, 7]
const arr4 = [0, 1, 2, [[[3, 4]]]];
console.log(arr4.flat(2)); // Expected output: Array [0, 1, 2, Array [3, 4]]
console.log(arr4.flat(3)); // Expected output: Array [0, 1, 2, 3, 4]

// 15. flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
// flatMap(callbackFn)
console.log([1, 2, 1].flatMap((num) => (num === 2 ? [2, 2] : 1))); // [1, [2,2], 1] when mapped
// Expected output: Array [1, 2, 2, 1] (after flattened)

// 16. forEach() method executes a provided function once for each array element. Does not result to an araay unlike map() method.
// forEach(callbackFn)
const arrayA = ["a", "b", "c"];
arrayA.forEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
// Example 2:
const arrayB = [4, 6, 5];
const multiplyByFour = (element) => console.log(element * 4);
arrayB.forEach(multiplyByFour); // Expected output: 16, 24, 20

// 17. Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// 17a. Array.from(arrayLike)
// 17b. Array.from(arrayLike, mapFn)
console.log(Array.from("foo")); // Expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x)); // Expected output: Array [2, 4, 6]

// 17. includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// 17a. includes(searchElement)
// 17b. includes(searchElement, fromIndex)
console.log([1, 2, 3].includes(2)); // Expected output: true
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat")); // Expected output: true
console.log(pets.includes("cat", 2)); // Expected output: false
console.log(pets.includes("at")); // Expected output: false

// 20. join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); // Expected output: "Fire,Air,Water" (join them with no space)
console.log(elements.join("")); // Expected output: "FireAirWater" (join them with nothing)
console.log(elements.join("-")); // Expected output: "Fire-Air-Water" (join them with dash)

// 21. keys() method returns a new array iterator object that contains the keys for each index in the array.
const array1 = ["a", "b", "c"];
const iterator = array1.keys();
console.log(iterator);

for (const key of iterator) {
  console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2

// 23. map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// 23a. map(callbackFn)
const arrayTwice = [1, 4, 9, 16];
const map1 = arrayTwice.map((x) => x * 2); // Pass a function to map
console.log(map1); // Expected output: Array [2, 8, 18, 32]

// 24. Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.(duplicates an array)
console.log(Array.of("foo", 2, "bar", true)); // output: Array ["foo", 2, "bar", true]
console.log(Array.of()); // output: Array []
