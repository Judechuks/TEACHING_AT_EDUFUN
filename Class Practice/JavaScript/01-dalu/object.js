// let object_name = {key1: value1, key2: value2} // object syntax
const fast_and_furious = () => {
  console.log("Fast and furious is my favorite movie. I enjoyed watching it.");
};

let myself = {
  // properties
  firstName: "Divine",
  lastName: "Egenti",
  age: 20,
  occupation: "Student",

  // method
  invention: () => {
    console.log(myself.firstName + " " + myself.lastName + " invented a car");
  },

  bestMovie: fast_and_furious,

  bestfriend: { name: "David", age: 19 },
  isMarried: true,
  classMate: ["Fred", "Kelvin"],
  friends: [
    {
      name: "Paul",
      age: 20,
      height: "120cm",
      isMale: true,
      paulfriends: [{ name: "James", age: 20, height: "120cm", isMale: true }],
    },
    { name: "Peter", age: 21, height: "110cm", isMale: true },
    { name: "Pascal", age: 19, height: "115cm", isMale: true },
    { name: "Prince", age: 21, height: "125cm", isMale: true },
    { name: "Peace", age: 22, height: "100cm", isMale: false },
  ],
};

// console.log(myself.firstName);
// myself.invention();
myself.bestMovie();
// console.log(myself.bestfriend.name);
// console.log(myself.classMate[1]);

console.log(myself.friends[0].paulfriends[0].name);
