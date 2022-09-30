(() => {
	const items = document.querySelectorAll(".item");
	console.log(items.length);
	items.forEach(el => {
		console.log(el.children[0].textContent);
		console.log(el.children[1].children);
	})
})();