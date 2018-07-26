import axios from 'axios';
import qs from 'query-string';
import filter from 'lodash/filter';
import isUndefined from 'lodash/keys';

const filterUndefined = data => {
  Object.keys(data).forEach(key => data[key] === undefined ? delete data[key] : '')
  return data;
};

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

const withQueryString = (baseURL, data) => {
  const filteredData = filterUndefined(data);
  console.log(filteredData);
  return `${baseURL}?${qs.stringify(filteredData)}`;
}

export const fetchDataList = ({
	order,
	orderBy,
	page,
	rowsPerPage,
	pageCategory,
  search,
}) => {
  const pageSpecificParams = API_MAP[pageCategory];
  const data = {
    page,
    per_page: rowsPerPage,
    sort_by: typeof orderBy !== 'undefined' ? `${orderBy}:${order}` : '',
    ...search,
    ...pageSpecificParams.data
  }
  const payload = {
  	url: withQueryString(pageSpecificParams.url, data),
  	method: pageSpecificParams.method,
  };
  payload.headers = {};
  console.log(payload);
  return request(payload);
};