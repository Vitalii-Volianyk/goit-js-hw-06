function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
(() => {
  const input = document.querySelector(".change-color");
  const output = document.querySelector(".color");
  input.addEventListener("click", () => {
    const color = getRandomHexColor();
    output.textContent = color;
    document.body.style.backgroundColor = color;
  });
})();