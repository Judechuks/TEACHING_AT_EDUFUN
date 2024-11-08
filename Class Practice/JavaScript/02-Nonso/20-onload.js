window.onload = function () {
  const imageContainer = document.getElementById("imageContainer");
  const loadingMessage = document.getElementById("loadingMessage");
  const myImage = document.getElementById("myImage");
};
myImage.onload = function () {
  loadingMessage.style.display = "none";
  imageContainer.style.display = "block";
};
