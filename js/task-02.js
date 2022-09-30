const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
(() => {
  const list = document.querySelector("#ingredients");
  const items = ingredients.map(text => {
   const el= document.createElement('li');
    el.textContent = text;
    el.classList.add("item");
    return el;
  });
  list.append(...items);
})();
