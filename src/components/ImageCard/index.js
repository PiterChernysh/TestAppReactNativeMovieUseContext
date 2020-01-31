import React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import { W, image } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: W / 2.4,
    height: W * 0.63,
    backgroundColor: "blue",
    borderRadius: 10
  },
  sub: {
    shadowColor: "#000",
    width: W / 2.4,
    height: W * 0.63,
    backgroundColor: "white",
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 2
  },
  h1: {
    position: "absolute",
    top: W / 2.35,
    fontWeight: "bold",
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 16,
    textAlign: "left"
  },
  h2: {
    position: "absolute",
    top: W / 1.75,
    paddingLeft: 10,
    fontSize: 14,
    textAlign: "left"
  },
  cover: {
    position: "relative",
    width: W / 2.4,
    height: W * 0.63,
    borderRadius: 10
  },
  coverAbout: {
    position: "absolute",
    top: W / 2.3,
    width: W / 2.4,
    height: W * 0.26,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 10,
    opacity: 0.8
  }
});

const ImageCard = props => {
  const { container, sub, coverAbout, h1, h2, cover } = styles;
  const { navigation, movie, setMovieId } = props;
  const { poster_path, title, release_date, id } = movie;
  const setNovigationProps = () => {
    setMovieId(id);
    navigation.navigate("About");
  };
  const date = new Date(release_date).getFullYear();
  const img = image + poster_path;
  return (
    <TouchableOpacity onPress={setNovigationProps}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{ uri: img }} />
          <Image style={coverAbout} source={require("./card.png")} />
          <Text style={h1}>{title}</Text>
          <Text style={h2}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ImageCard;
