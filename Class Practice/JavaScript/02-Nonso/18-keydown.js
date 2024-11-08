document
  .getElementById("textInput")
  .addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    switch (key) {
      case ">":
        this.style.backgroundColor = "red";
        break;
      case "g":
        this.style.backgroundColor = "green";
        break;
      case "b":
        this.style.backgroundColor = "blue";
        break;
      default:
        this.style.backgroundColor = "white";
    }
  });

// NOTE: this would work in a regular function but not in an arrow function
