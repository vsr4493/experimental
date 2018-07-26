import axios from 'axios';

const API_MAP = {
	'LOCATION_MASTER': {
		url: '/api/getInventory',
		method: 'GET',
	}
}

const transformRequest = (payload) => {
};

const request = (payload) => {
  return axios.request(payload);
}

export const fetchDataList = ({
	order,
	orderBy,
	page,
	rowsPerPage,
	pageCategory,
}) => {
  const payload = {
  	url: API_MAP[pageCategory].url,
  	method: API_MAP[pageCategory].method,
  };
  Object.assign(payload, {
  	// Add custom params here
  });
  payload.headers = {};
  return request(payload);
};