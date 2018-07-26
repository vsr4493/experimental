import axios from 'axios';

export const request = ({ payload }) => {
  return axios.request(payload);
}