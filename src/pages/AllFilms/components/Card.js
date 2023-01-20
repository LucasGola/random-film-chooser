import React, { useState } from "react";
import {
  Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, Modal, Button, StatusBar
} from "react-native";
import sadFace from '../../../../assets/sadFace.png';

const { width } = Dimensions.get("window");

export default function Card({ img, name, platform, description, style }) {
  const [isFilmFocused, setFilmFocused] = useState(false);

  const handleFilmFocused = () => setFilmFocused(!isFilmFocused);

  return (
    <TouchableOpacity style={[styles.card, style]} onPress={handleFilmFocused}>
      {img ? <Image source={img} style={styles.img} /> : <Image source={sadFace} style={styles.img} />}
      <View style={styles.infos}>
        <Text style={styles.infosDescription}>{name}</Text>
        <Text style={styles.infosDescription}>{platform}</Text>
      </View>
      <Modal visible={isFilmFocused}>
        <View style={{ flex: 1 }}>
          {img ? <Image source={img} style={styles.modalImg} /> : <Image source={sadFace} style={styles.modalImg} />}
          <Text style={styles.modalTitle}>{name}</Text>
          <Text style={styles.modalDescription}>{description}</Text>
          <Text style={styles.modalPlatform}>Plataforma: {platform}</Text>
        </View>
        <TouchableOpacity onPress={handleFilmFocused} style={styles.closeModalButton}>
          <Text style={styles.closeModalText}>Voltar</Text>
        </TouchableOpacity>
      </Modal>
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
  },
  modalImg: {
    width: '100%',
    height: 1360 / 2040 * width,
  },
  modalTitle: {
    fontWeight: 'bold',
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    marginHorizontal: "3%",
    marginVertical: "5%",
    borderBottomWidth: 2,
    borderBottomColor: "#40464646",
  },
  modalDescription: {
    marginHorizontal: "3%",
    marginBottom: 20,
  },
  modalPlatform: {
    marginHorizontal: "3%",
  },
  closeModalButton: {
    backgroundColor: '#66007fff',
    marginHorizontal: "15%",
    marginVertical: "10%",
    borderRadius: 30,

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
  closeModalText: {
    textAlign: 'center',
    lineHeight: 60,
    color: '#fff',
    fontSize: 20,
  }
});