import axios from 'axios';

const URI_CONFIG = {
	BASE: 'http://demo5190193.mockable.io', 
};

const API_ENDPOINTS = {
	'GET_INVENTORY': {
		uri: '/api/get_inventory',
		method: 'GET',
	}
}

export const fetchDataList = ({
	order,
	orderBy,
	page,
	rowsPerPage,
	pageCategory,
}) => {
  const payload = {
  	uri: API_ENDPOINTS[pageCategory].URI,
  	method: API_ENDPOINTS[pageCategory].method,
  };
  Object.assign(payload, {
  	// Add custom params here
  });
  payload.headers = {};
  return axios.request(payload);
};