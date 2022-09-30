let counterValue = 0;
(() => {
  const decrements = document.querySelector('[data-action="decrement"]');
  const increments = document.querySelector('[data-action="increment"]');
  const value = document.querySelector("#value");
  
  decrements.addEventListener("click", decrement);
  increments.addEventListener("click", increment);

  function decrement() {
    counterValue -= 1;
    value.textContent = counterValue;
  }
  function increment() {
    counterValue += 1;
    value.textContent = counterValue;
  }
})();