window.onload = () => {
	productMenu();
}

const productMenu = () => {
	const hanger = document.querySelector('#hanger-link');
	const littleThings = document.querySelector('#little-things-link');
	const clothing = document.querySelector('#clothing-link');
	const hangerProd = document.querySelector('#hanger-products');
	const littleThingsProd = document.querySelector('#little-things-products');
	const clothingProd = document.querySelector('#clothing-products');

	hangerProd.style.display = "block";
	littleThingsProd.style.display = "none";
	clothingProd.style.display = "none";

	hanger.addEventListener('click', () => {
		hangerProd.style.display = "block";
		littleThingsProd.style.display = "none";
		clothingProd.style.display = "none";
	});

	littleThings.addEventListener('click', () => {
		hangerProd.style.display = "none";
		littleThingsProd.style.display = "block";
		clothingProd.style.display = "none";
	});

	clothing.addEventListener('click', () => {
		hangerProd.style.display = "none";
		littleThingsProd.style.display = "none";
		clothingProd.style.display = "block";
	});
}