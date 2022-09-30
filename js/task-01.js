(() => {
	const items = document.querySelectorAll(".item");
	console.log(`Number of categories: ${items.length}\n`);
	items.forEach(el => {
		console.log(`Category:  ${el.children[0].textContent}`);
		console.log(`Elements: ${el.children[1].children.length}\n`);
	})
})();