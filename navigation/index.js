import * as React from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer, TabNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../src/screen/Home";
import About from "../src/screen/About";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: "MOVIES",
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        headerTitle: "About",
        header: null
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Navigate extends React.Component {
  render() {
    return <AppContainer />;
  }
}
