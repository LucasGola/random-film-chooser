import {
  Text, StyleSheet, StatusBar, View
} from 'react-native';

const adjustedStatusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 24;

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Random Film Chooser</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#65169c',
    paddingTop: adjustedStatusBar,
    paddingBottom: adjustedStatusBar / 2,
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
});