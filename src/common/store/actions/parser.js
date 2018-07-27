const parseItem = (item) => {
	return {
		...item,
		show_edit_button: true,
	}
}

export const normalizeList = (list) => {
	return list.reduce((acc, i) => {
		acc[i.id] = i;
		return acc;
	}, Object.create(null));
}

