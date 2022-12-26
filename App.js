import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Home from "./src/pages/Home";
import FilmCard from "./src/components/FilmsCards.js";

export default function App() {
  return <SafeAreaView style={styles.container}>
    <FilmCard />
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});