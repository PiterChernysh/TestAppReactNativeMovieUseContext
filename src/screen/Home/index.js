import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Button, StyleSheet } from "react-native";
import ImageCard from "../../components/ImageCard";
import { GETMoviesList } from "../../actions/GETMoviesList";
import { conectContext } from "../../MovieContext/conectContext";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

const Home = conectContext(props => {
  const { setMovieList, movieList, setMovieId, navigation } = props;
  useEffect(() => {
    GETMoviesList(setMovieList);
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {movieList.map(item => (
          <ImageCard key={item.id} movie={item} setMovieId={setMovieId} navigation={navigation}/>
        ))}
      </View>
    </ScrollView>
  );
});
export default Home;

