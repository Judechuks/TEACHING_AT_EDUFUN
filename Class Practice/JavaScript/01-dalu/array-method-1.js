const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
console.log(arrIter.next().value); // undefined

let my_brothers = ["John", "James", "Jonathan"];
let sisters = ["Judith", "Jessica"];
let half_brothers = ["Jack", "JIm"];

let all_my_brothers = [my_brothers, half_brothers];
console.log(all_my_brothers);

let my_siblings = [all_my_brothers, sisters];
console.log(my_siblings.flat(2));
