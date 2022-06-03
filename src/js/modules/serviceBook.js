export const API_URI = 'http://localhost:3024/';

export const getBooks = async (id) => {
	const response = await fetch(`${API_URI}api/books/`);
	if (response.ok) {
		return await response.json();
	}
	throw new Error(response.statusText);
}
export const getLabels = async () => {
	const response = await fetch(`${API_URI}label/`);
	if (response.ok) {
		return await response.json();
	}
	throw new Error(response.statusText);
}