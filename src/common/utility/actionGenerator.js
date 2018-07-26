/*
** Generate prefix for actions
*/
const getPrefix = (namespace) => {
	return namespace.toUpperCase().replace(/\//g,'_').replace(/_[A-Z.]+$/,'')
};

/*
** Returns generator to generate action types
*/
const generator = (namespace) => {
	const prefix = getPrefix(namespace);
	return (action) => `${prefix}_${action.toUpperCase().replace(/ /g, '_')}`;
};

export default generator;
