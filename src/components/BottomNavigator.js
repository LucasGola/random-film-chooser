import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FilmChooser from "../pages/FilmChooser";
import AddFilm from "../pages/AddFilm";
import AllFilms from "../pages/AllFilms";
import InitialPage from "../pages/InitialPage";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="All Films" component={AllFilms} />
      <Tab.Screen name="Home" component={InitialPage} />
      <Tab.Screen name="Chooser" component={FilmChooser} />
      <Tab.Screen name="Add Film" component={AddFilm} />
    </Tab.Navigator>
  </NavigationContainer>;
}