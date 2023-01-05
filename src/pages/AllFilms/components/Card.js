import React from "react";
import {
  Text, View, StyleSheet, Dimensions, Image, TouchableOpacity
} from "react-native";

const { width } = Dimensions.get("window");

export default function Card({ img, name, platform, style }) {
  return (
    <TouchableOpacity style={[styles.card, style]}>
      <Image source={img} style={styles.img} />
      <View style={styles.infos}>
        <Text style={styles.infosDescription}>{name}</Text>
        <Text style={styles.infosDescription}>{platform}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47%',
    height: width * 0.55,
    backgroundColor: '#9578A4',

    // SHADOW UNDER CARDS
    // android
    elevation: 6,
    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  img: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  infos: {
    margin: "5%",
  },
  infosDescription: {
  }
});