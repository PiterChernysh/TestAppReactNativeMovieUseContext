import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./navigation";
import MovieContext from "./src/MovieContext";

const App = () => {
  return (
      <MovieContext>
        <Navigation style={styles.container} />
      </MovieContext>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
