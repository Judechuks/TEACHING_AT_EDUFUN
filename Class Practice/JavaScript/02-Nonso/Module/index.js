/*
// 1. Named export
// 1 (i). Inline Export
export const name = "Nonso"; // member
export const age = 20; // member
*/

// 1 (ii)Group export
// const name = "Divine";
// const age = 10;
// export { name, age };

// 2. Default Exports
export function showDetails() {
  const name = "Jesse";
  const age = 40;
  alert(`${name} is ${age} years old.`);
}

const message = () => {
  const city = "Onitsha";
  const country = 40;
  alert(`Welcome to ${city} city in ${country}.`);
  return `Welcome to ${city} city in ${country}.`;
};
export { message };
