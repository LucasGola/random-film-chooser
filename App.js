import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import InitialPage from './src/pages/InitialPage';
import BottomNavigator from './src/components/BottomNavigator';

export default function App() {
  return <SafeAreaView style={{ flex: 1 }}>
    <BottomNavigator />
  </SafeAreaView>;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
