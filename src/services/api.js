import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_KEY = 'HeMbYYXj0wwRAoSZlNpXduKD8cqLbP0b6WZTOvEIO4Y';

export const fetchImg = async (query, page) => {
  const response = await axios.get(
    `/search/photos?client_id=${API_KEY}&query=${query}&page=${page}&per_page=9`
  );
  console.log(response.data);

  return response.data;
};
