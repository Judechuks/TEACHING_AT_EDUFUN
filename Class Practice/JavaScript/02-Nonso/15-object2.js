function fast_and_furious() {
  // console.log(myself.name + " invented a car");
  console.log("Fast and furious");
}
function mortal_kombat() {
  // console.log(myself.name + " invented a car");
  console.log("Mortal Kombat");
}

function Person(a, b, c, d, e) {
  // constructor - reuseable for creating objects with similar properties and methods
  // properties
  this.name = a;
  this.age = b;
  this.height = c;
  this.isMale = d;

  // method
  this.bestMovie = e;
}

const myself = new Person("Divine Nonso", 20, "120cm", true, fast_and_furious);
const myself2 = new Person("Nonso", 21, "130cm", true, mortal_kombat);
const myself3 = new Person("Jude", 14, "100cm", true, () => {
  console.log("Smallville");
});

myself.invention = function () {
  // a method for a specific object
  // console.log(this.name + " invented a car");
  console.log(myself.name + " invented a car");
};

console.log(myself.name);
console.log(myself2.name);
myself.invention();
myself.bestMovie();
myself3.bestMovie();

// Assignment
/*
1. Create an object of school with the school name, number of buildings, number of students, number of teachers and founder's name, occupation, isMale, and isMarried.

2. 
*/
