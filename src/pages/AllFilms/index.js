import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Modal, Button } from "react-native";
import Card from "./components/Card";
import films from "../../moks/films";

export default function AllFilms() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {films.map((film) => {
          return <Card {...film}
            style={styles.card}
            key={film.name}
          />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "4%",
    justifyContent: "space-between"
  },
  card: {
    marginBottom: "4%",
    borderRadius: 5,
  }
});