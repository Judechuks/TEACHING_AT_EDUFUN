document
  .getElementById("textInput")
  .addEventListener("keyup", function (event) {
    const inputLength = this.value.length;
    document.getElementById("output").textContent = inputLength;
  });

// NOTE: this would work in a regular function but not in an arrow function
