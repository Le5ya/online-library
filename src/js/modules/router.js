import Navigo from 'navigo';

export const router = new Navigo('/', {
	hash: true,
});

const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');
// const backBtns = document.querySelectorAll('.header__btn-back');
const backBtn = document.querySelector('.book__btn-back');

const addBtns = document.querySelectorAll('.header__btn-add, .library__add-btn');

const closeAllPage = () => {
	library.classList.add('hidden');
	book.classList.add('hidden');
	add.classList.add('hidden');
};

export const initRouter = () => {
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
	
	
	addBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			router.navigate('add');
		})
	})
	// backBtns.forEach((btn) => {
	// 	btn.addEventListener('click', () => {
	// 		router.navigate('/');
	// 	})
	// });
	backBtn.addEventListener('click', () => {
		router.navigate('/');
	});
};

