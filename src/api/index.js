import axios from 'axios';
const baseUrl = 'https://api.themoviedb.org/3';
const apikey = '?api_key=1cc97827f72be9cbe2ffb6e7bf434cb9&language=en-US';

export const fetchTrendingList = async () => {
  const { data } = await axios.get(baseUrl + '/trending/movie/day' + apikey);
  return data;
};
export const fetchMoviesBySearch = async search => {
  const { data } = await axios.get(
    `${baseUrl}/search/movie${apikey}&query=${search}&page=1&include_adult=false`
  );
  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`${baseUrl}/movie/${id}${apikey}`);
  return data;
};

export const fetchMovieCredits = async id => {
  const { data } = await axios.get(`${baseUrl}/movie/${id}/credits${apikey}`);
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(
    `${baseUrl}/movie/${id}/reviews${apikey}&page=1`
  );
  return data;
};
