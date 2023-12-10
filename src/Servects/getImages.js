const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '25848819-9cdff21383665c4a2b048e17c';

export const getImages = searchText => {
  return fetch(
    `${BASE_URL}/?q=${searchText}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
