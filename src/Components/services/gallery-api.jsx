import axios from 'axios';

const key = '20215249-e09209c13878f741c0eae724a';
axios.defaults.baseURL = 'https://pixabay.com/api';

const FetchApi = (value, page) => {
  const response = axios.get(
    `/?q=${value}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return response;
};

export default FetchApi;
