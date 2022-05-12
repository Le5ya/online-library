import Navigo from 'navigo';

const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');

const addBtns = document.querySelectorAll('.header__btn-add, .library__add-btn');
const backBtns = document.querySelectorAll('.header__btn-back');
const btnSearch = document.querySelectorAll('.header__btn-search');
const search = document.querySelectorAll('.search');

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
    },
    'book': () => {
        closeAllPage();
        book.classList.remove('hidden');
    },
    'add' : () => {
        closeAllPage();
        add.classList.remove('hidden');
    }
}).resolve();

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
 }

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

const closeSearch = ({target}) => {
    if(target.closest('.search, .header__btn-search')) {
        return;
    }
    search.classList.remove('search_active');
}

btnSearch.forEach(btn => {
    btn.addEventListener('click', () => {
        search.classList.add('search_active');
        document.addEventListener('click', closeSearch);
    })
})

 

