(() => {
  const items = document.querySelectorAll(".item");
  console.log(`Number of categories: ${items.length}`);
  items.forEach(el => {
    console.log(`
      Category:  ${el.children[0].textContent}
      Elements: ${el.children[1].children.length}
    `);
  })
})();