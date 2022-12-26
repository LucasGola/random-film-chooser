import React from "react";
import { FlatList } from "react-native";
import Header from "../Header";
import useFilms from "../../../hooks/useFilms";
import Card from "./components/Card";

export default function FilmCard() {
  const [films] = useFilms();

  return <FlatList
    data={films}
    renderItem={({ item }) => <Card {...item} />}
    ListHeaderComponent={Header}
    keyExtractor={({ name }) => name}
  />;
}