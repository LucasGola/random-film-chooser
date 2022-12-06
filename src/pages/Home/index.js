import {
  Text, View, StyleSheet, TouchableOpacity
} from 'react-native';
import Header from "../../components/Header";


export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Adicionar um filme/série')}>
            <Text style={styles.buttonText}>Adicionar um filme/série</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Ver os filmes/séries')}>
            <Text style={styles.buttonText}>Ver os filmes/séries</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#464646',
    height: '100%',
  },
  containerButtons: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '80%',
  },
  button: {
    marginVertical: 50,
    marginHorizontal: 20,
    backgroundColor: '#44b1d0',
    borderRadius: 10,
    paddingVertical: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  }
});