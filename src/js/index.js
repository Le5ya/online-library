import Navigo from 'navigo';

const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');

const addBtns = document.querySelectorAll('.header__btn-add, .library__add-btn');
const backBtns = document.querySelectorAll('.header__btn-back');
const btnSearch = document.querySelectorAll('.header__btn-search');
const search = document.querySelector('.search');
const fieldsBtnSort = document.querySelector('.fields__btn_sort');
const fieldsListSort = document.querySelector('.fields__list_sort');
const fieldsBtnFilter = document.querySelector('.fields__btn_filter');
const fieldsListFilter = document.querySelector('.fields__list_filter');

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

const closeSearch = ({ target }) => {
    if (target.closest('.search, .header__btn-search')) {
        return;
    }
    search.classList.remove('search_active');
}

btnSearch.forEach(btn => {
    btn.addEventListener('click', () => {
        search.classList.add('search_active');
        document.body.addEventListener('click', closeSearch, true);
    });
});

const controlField = (btn, list) => {
    btn.addEventListener('click', () => {
        list.classList.toggle('fields__list_active');
    });
    list.addEventListener('click', ({ target }) => {
        if (target.classList.contains('fields__button')) {
            list.classList.remove('fields__list_active')
        }
    });
};
controlField(fieldsBtnSort, fieldsListSort);
controlField(fieldsBtnFilter, fieldsListFilter);





