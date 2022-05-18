export const controlField = (btn, list) => {
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