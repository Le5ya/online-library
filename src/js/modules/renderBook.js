import { getLabels, getBooks, API_URI } from "./serviceBook.js";

const libraryList = document.querySelector('.library__list');



export const renderBook = async (id) => {
	const [books, labels] = await Promise.all([getBooks(id), getLabels()]);
};