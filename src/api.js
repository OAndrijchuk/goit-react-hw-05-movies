import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGU5ODRhYmM2MDEzMDcwY2VkZDljNGIyZjIxMWM5ZiIsInN1YiI6IjY0ZDRlZDM1ZGI0ZWQ2MDBlMmI1OWE4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bgFL2NCnu5ACsHgP65e5dswMwW8Akm6RtwyXDGjxCJg';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const fethBestMovies = async () => {
  try {
    const { data } = await axios.get(`/trending/all/day`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fethMovieInfo = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fethMoviesByQuery = async query => {
  try {
    const { data } = await axios.get(`/search/movie`, { params: { query } });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fethCast = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const fethReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
