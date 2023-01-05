import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import MyButton from "./components/Button";

export default function InitialPage() {
  return (
    <>
      <Header />
      <View style={styles.buttonsView}>
        <MyButton style={styles.button} title={"Adicionar filme/série"} onPress={() => console.log("Adicionar filme/série")} />
        <MyButton style={styles.button} title={"Ver filme/série"} onPress={() => console.log("Ver filme/série")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonsView: {
  },
  button: {
    marginTop: '40%'
  }
});