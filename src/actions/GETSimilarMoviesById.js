import { API_KEY } from "react-native-dotenv"

export const GETSimilarMoviesById = async props => {
  const { movieId, setSimilarMoviesById } = props;
  function onSuccess(success) {
    setSimilarMoviesById(success);
    return success;
  }
  function onError(error) {
    dispatch({ type: MOVIES_FAILED, error });
    return error;
  }
  try {
    const URL = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    const res = await fetch(URL, {
      method: "GET"
    });
    const success = await res.json();
    return onSuccess(success.results);
  } catch (error) {
    return onError(error);
  }
};
