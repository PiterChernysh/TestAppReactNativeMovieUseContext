import { API_KEY } from "react-native-dotenv"

export const GETMoviesList = async setMovieList => {
  function onSuccess(success) {
    setMovieList(success);
    return success;
  }
  function onError(error) {
    dispatch({ type: MOVIES_FAILED, error });
    return error;
  }
  try {
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    const res = await fetch(URL, {
      method: "GET"
    });
    const success = await res.json();
    return onSuccess(success.results);
  } catch (error) {
    return onError(error);
  }
};
