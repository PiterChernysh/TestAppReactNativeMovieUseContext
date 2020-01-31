import React, { useState } from "react";

import MyContext from "../context";

const MovieContext = props => {
  const [movieList, setMovieList] = useState([]);
  const [movieId, setMovieId] = useState();
  const [similarMoviesById, setSimilarMoviesById] = useState([]);
  const [movie, setMovie] = useState({});
  const store = {
    movieList: movieList,
    movieId: movieId,
    similarMoviesById: similarMoviesById,
    movie: movie,
    setMovieList: list => {
      setMovieList(list);
    },
    setMovieId: id => {
      setMovieId(id);
    },
    setSimilarMoviesById: list => {
      setSimilarMoviesById(list);
    },
    setMovie: val => {
      setMovie(val);
    }
  };
  return (
    <MyContext.Provider value={store}>{props.children}</MyContext.Provider>
  );
};

export default MovieContext;
