import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // return an instance of axios
  return axios.create({
    baseURL: 'http://localhost:5500/',
    headers: {
      Authorization: token
    }
  });
};