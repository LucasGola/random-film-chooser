import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";

export default function Card({ name, img, platform }) {
  return <TouchableOpacity
    style={styles.card}
    onPress={console.log('card')}
  >
    <Image source={img} accessibilityLabel={name} style={styles.img} />
    <View style={styles.infos}>
      <Text style={styles.text}>Nome: {name}</Text>
      <Text style={styles.text}>Plataforma: {platform}</Text>
    </View>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',

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
    width: 60,
    height: 60,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  infos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
});