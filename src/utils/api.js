import axios from 'axios';

const api = axios.create({
   baseURL: 'https://run.mocky.io/v3/6cee870e-47bd-45b7-8650-8c171b6984b5',
   timeout: 10000,
});

export const fetchData = async (endpoint) => {
   const response = await api.get(endpoint);
   return response.data
};
