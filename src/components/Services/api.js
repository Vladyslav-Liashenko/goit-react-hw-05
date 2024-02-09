import axios from 'axios';
const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

export const fetchPopular = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This didn't work.");
    throw error;
  }
};
