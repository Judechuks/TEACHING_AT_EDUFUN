// const heading = document.getElementById("heading1");
// const heading = document.getElementsByTagName("h1");
// const paragraph1 = document.getElementsByClassName("paragraph");
// const paragraph2 = document.getElementsByName("paragraph2");
const links = document.querySelectorAll("[href]");
// console.log(heading);
console.log(links);

// link.innerHTML = "Chukwudalu";
let i = 0;
// links.forEach((link) => (link.innerHTML = "link" + i++));
const linkArray = ["Home", "About", "Contact", "Subscribe"];
links.forEach((link) => (link.textContent = linkArray[i++]));

// Difference Between textContent, innerText, and innerHTML property
console.log("textContent");
console.log(document.getElementById("div").textContent);
console.log("innertext");
console.log(document.getElementById("div").innerText);
console.log("innerHTML");
console.log(document.getElementById("div").innerHTML);

// Creating an element from Javascript
document.getElementById("container").innerText =
  '<img src="../../HTML and CSS/beauty-and-beast.jpg" alt="">';
document.getElementById("container").textContent =
  '<img src="../../HTML and CSS/beauty-and-beast.jpg" alt="">';
document.getElementById(
  "container"
).innerHTML = `<img src="../../HTML and CSS/beauty-and-beast.jpg" alt="">
  <h3>All you need to know about alloy wheels.</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus vel molestiae quam molestias voluptate odio magnam.</p>
  `;

links.style.backgroundColor = "gray";
