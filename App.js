import Home from './src/pages/Home';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Home style={styles.container}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})