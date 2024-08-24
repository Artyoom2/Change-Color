const button = document.querySelector(".changeColor");
const color = document.querySelector(".color");
button.addEventListener("click", getRandomColor);
function getRandomColor() {
  let hexColor = getRandomNumber();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
}
function getRandomNumber() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
