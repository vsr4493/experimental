import axios from 'axios';
import qs from 'query-string';

const API_MAP = {
	'LOCATION_MASTER': {
		url: '/api/locations',
		method: 'GET',
    data: {
      include: 'vendor',
    }
	}
}

const transformRequest = (payload) => {
};

const request = (payload) => {
  return axios.request(payload);
}

const withQueryString = (baseURL, data) => `${baseURL}?${qs.stringify(data)}`;

export const fetchDataList = ({
	order,
	orderBy,
	page,
	rowsPerPage,
	pageCategory,
  search,
}) => {
  console.log(search);
  const pageSpecificParams = API_MAP[pageCategory];
  const data = {
    page,
    per_page: rowsPerPage,
    sort_by: `${orderBy}:${order}`,
    ...search,
    ...pageSpecificParams.data
  }
  const payload = {
  	url: withQueryString(pageSpecificParams.url, data),
  	method: pageSpecificParams.method,
  };
  payload.headers = {};
  return request(payload);
};