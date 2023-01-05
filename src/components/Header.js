import { View, Text, StyleSheet, SafeAreaView } from "react-native";


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Random Film Chooser</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5f04de',
    paddingTop: 30,
    paddingBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24
  }
});