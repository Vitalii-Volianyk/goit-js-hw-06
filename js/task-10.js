function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
(() => {
  const input = document.querySelector("input");
  const create = document.querySelector("[data-create]");
  const destroy = document.querySelector("[data-destroy]");
  const output = document.querySelector("#boxes");
  create.addEventListener("click", () => {createBoxes(input.value)});
  destroy.addEventListener("click", () => {output.innerHTML=""});
  function createBoxes(amount) {
    if (amount) {
      output.innerHTML = "";
      for (let i = 0; i < amount; i++) {
        const element = `<div style="width:${30 + i * 10}px;height:${30 + i * 10}px;background-color:${getRandomHexColor()}"></div>`;
        output.insertAdjacentHTML("beforeend", element);
      }
    }
  }
})();