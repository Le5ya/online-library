import { router } from './router.js'

const changeFieldset = () => {
	const fieldsets = document.querySelectorAll('.add__fieldset');
	const addBtn = document.querySelector('.add__btn');
	const form = document.querySelector('.add__form');

	let count = 0;

	addBtn.addEventListener('click', ({ target }) => {
		const fieldset = fieldsets[count];

		let valid = true;

		for (const elem of fieldset.elements) {
			if (!elem.checkValidity()) {
				elem.classList.add('no-valid');
				valid = false;
			} else {
				elem.classList.remove('no-valid');
			}
		}
		if (valid) {
			count += 1;

			if (count === fieldsets.length - 1) {
				addBtn.textContent = 'Добавить книгу';
			}
			if (count === fieldsets.length) {

				const data = true;
				if (data) {
					form.reset();
					router.navigate('/');
					count = 0;
					addBtn.textContent = 'Далее';
				}
			}
			fieldset.classList.add('hidden');
			fieldsets[count].classList.remove('hidden');
		}

	})
}
export default changeFieldset;