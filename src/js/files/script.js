// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// let hamburger = document.querySelector('.icon-menu');
// let menu = document.querySelector('.burger');

// const toggleMenu = () => {
// 	document.documentElement.classList.toggle('menu-open');
// 	document.documentElement.classList.toggle('lock');
// }

// hamburger.addEventListener('click', e => {
// 	e.preventDefault();

// 	toggleMenu();
// });

// document.addEventListener('click', e => {
// 	const withinBoundaries = e.composedPath().includes(menu);
// 	const withinBtn = e.composedPath().includes(hamburger);
// 	if ( ! withinBoundaries && !withinBtn ) {
// 		document.documentElement.classList.remove('menu-open');
// 		document.documentElement.classList.remove('lock');
// 	};
// });

const btns = document.querySelectorAll('.collections__button');

if (btns.length > 0) {
	for (const btn of btns) {
		btn.addEventListener("click", () => {
			clearActiveClasses()
			btn.classList.add("active");
		});
	};
	
	function clearActiveClasses() {
		btns.forEach((btn) => {
			btn.classList.remove("active");
		});
	};
};

const collectionsItems = document.querySelectorAll('.item-collections');
const windowWidth = window.innerWidth - (window.innerWidth - document.documentElement.clientWidth);

if (collectionsItems.length > 0) {
		collectionsItems.forEach((elem, i) => {
			if (windowWidth < 900 && i >= 4) {
				elem.style.display = "none";
			}
		});
		window.addEventListener('resize', () => {
			collectionsItems.forEach((elem, i) => {
				if (window.innerWidth < 900 && i >= 4) {
					elem.style.display = "none";
				}else if(window.innerWidth > 900 && i >= 4) {
					elem.style.display = "flex";
				}
			});
		})
};