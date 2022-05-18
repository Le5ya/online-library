import Navigo from 'navigo';

const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');
const backBtns = document.querySelectorAll('.header__btn-back');

const addBtns = document.querySelectorAll('.header__btn-add, .library__add-btn');

const router = new Navigo('/', {
	hash: true,
});
const closeAllPage = () => {
	library.classList.add('hidden');
	book.classList.add('hidden');
	add.classList.add('hidden');
}
router.on({
	'/': () => {
		closeAllPage();
		library.classList.remove('hidden');
		document.body.classList.remove('body_gradient');
	},
	'book': () => {
		closeAllPage();
		book.classList.remove('hidden');
		document.body.classList.add('body_gradient');
	},
	'add': () => {
		closeAllPage();
		add.classList.remove('hidden');
		document.body.classList.add('body_gradient');
	}
}).resolve();

closeAllPage();

addBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		router.navigate('add');
	})
})
backBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		router.navigate('/');
	})
});