import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MyButton({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007fff',
    marginHorizontal: 20,
    borderRadius: 8,

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
  text: {
    textAlign: 'center',
    lineHeight: 60,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
});