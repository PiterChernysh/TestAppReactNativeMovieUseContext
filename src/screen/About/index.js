import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { GETMovieById } from "../../actions/GETMovieById";
import { GETSimilarMoviesById } from "../../actions/GETSimilarMoviesById";

import { conectContext } from "../../MovieContext/conectContext";
import AboutMovie from "../../components/AdoutMovie";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});

const About = conectContext(props => {
  useEffect(() => {
    GETMovieById(props);
    GETSimilarMoviesById(props);
  }, []);
  return (
    <AboutMovie
      styles={styles.container}
      navigation={props.navigation}
      movieId={props.movieId}
    />
  );
});
export default About;
