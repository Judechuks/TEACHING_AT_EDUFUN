// Styling elements using the style property
const container = document.getElementById("container");
container.style.backgroundColor = "gray";
container.style.borderRadius = "10px";
container.style.height = "400px";
container.style.padding = "10px";

// Adding className
container.className = "underline bold"; // adds a class to an element
console.log(container.className); // shows you the classes of an element

// console.log(container.classList);
container.classList.add("newclass"); // adds className(s) to the element
container.classList.remove("underline"); // removes className(s) to the element
container.classList.toggle("smart"); // adds className if it does not exist or removes a className if it already exists

// Creating element using the createElement() method
const paragraph = document.createElement("p"); // creates a paragraph
paragraph.textContent = "Hello world! Welcome to the world of JavaScript"; // Set its content
container.appendChild(paragraph); // Appends or attaches it to the an element
