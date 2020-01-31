import { API_KEY } from "react-native-dotenv";

export const GETMovieById = async props => {
  const { movieId, setMovie } = props;
  function onSuccess(success) {
    setMovie(success);
    return success;
  }
  function onError(error) {
    dispatch({ type: MOVIES_FAILED, error });
    return error;
  }
    try {
      const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      const res = await fetch(URL, {
        method: "GET"
      });
      const success = await res.json();
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
};
