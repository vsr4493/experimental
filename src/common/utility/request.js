import axios from 'axios';
import qs from 'query-string';
import filter from 'lodash/filter';
import isUndefined from 'lodash/keys';

const filterUndefined = data => {
  Object.keys(data).forEach(key => data[key] === undefined ? delete data[key] : '')
  return data;
};

const transformRequest = (payload) => {
};

export const request = (payload) => {
  return axios.request(payload);
}

const withQueryString = (baseURL, data) => {
  const filteredData = filterUndefined(data);
  return `${baseURL}?${qs.stringify(filteredData)}`;
}

export const fetchDataList = ({
  order,
  orderBy,
  page,
  rowsPerPage,
  apiConfiguration,
  search,
}) => {
  const data = {
    page,
    per_page: rowsPerPage,
    ...search,
    ...apiConfiguration.data
  };
  if (typeof orderBy !== 'undefined') {
    Object.assign(data, {
      sort_by: `${orderBy}:${order}`,
    });
  }

  const payload = {
    url: withQueryString(apiConfiguration.url, data),
    method: apiConfiguration.method,
  };
  payload.headers = {};
  return request(payload);
};


export const updateItem = ({ updated, apiConfiguration }) => {
  const payload = {
    url: apiConfiguration.url,
    method: apiConfiguration.method,
    data: updated,
  };
  payload.headers = {};
  return request(payload);
};

export const fetchItemData = ({ apiConfiguration }) => {
  const payload = {
    url: withQueryString(apiConfiguration.url, apiConfiguration.data),
    method: apiConfiguration.method,
  };
  payload.headers = {};
  return request(payload);
}

export const login = ({ email, password }) => {
  const payload = {
    url: '/api/login',
    method: 'post',
    data: {
      email,
      password
    }
  }
  payload.headers = {};
  return request(payload);
}
