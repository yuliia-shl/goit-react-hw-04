import axios from 'axios';

export const fetchImg = async () => {
  const response = await axios.get(
    'https://api.unsplash.com/search/photos?client_id=HeMbYYXj0wwRAoSZlNpXduKD8cqLbP0b6WZTOvEIO4Y&query=dog&page=1&per_page=6'
  );
  return response.data;
};
