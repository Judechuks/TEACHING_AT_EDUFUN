function qualification() {
  let finishedSchool = prompt(
    "Are you through with secondary school?: "
  ).toLocaleLowerCase();
  let country = prompt("Your Country: ").toLocaleLowerCase();
  if (finishedSchool == "yes" && country == "nigeria") {
    alert("You just got a scholarship.");
  } else if (!(country == "nigeria")) {
    alert("Sorry this scholarship is for Nigerians only.");
  } else {
    alert("Apply when through with secondary school.");
  }
}
qualification();

// arrow function
const scholarship = () => {
  let finishedSchool = prompt(
    "Are you through with secondary school?: "
  ).toLocaleLowerCase();
  let country = prompt("Your Country: ").toLocaleLowerCase();
  if (finishedSchool == "yes" && country == "nigeria") {
    alert("You just got a scholarship.");
  } else if (!(country == "nigeria")) {
    alert("Sorry this scholarship is for Nigerians only.");
  } else {
    alert("Apply when through with secondary school.");
  }
  console.log("this will not show!");
};

console.log(scholarship());
