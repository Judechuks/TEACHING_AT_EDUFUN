function Person(a, b, c, d) {
  // constructor
  this.name = a;
  this.age = b;
  this.height = c;
  this.isMale = d;
}

const myself = new Person("Divine", 20, "120cm", true);
const myself2 = new Person("Nonso", 21, "130cm", true);

console.log(myself.name);
console.log(myself2.name);
