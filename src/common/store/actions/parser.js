export const normalizeList = (list) => {
	return list.reduce((acc, i) => {
		acc[i.id] = i;
		return acc;
	}, Object.create(null));
}