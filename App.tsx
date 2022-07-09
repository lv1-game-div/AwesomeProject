import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount: number) => prevCount + 1);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hello world</Text>
      <TouchableOpacity>
        <Text style={styles.button} onPress={onPress}>pres me!!</Text>
      </TouchableOpacity>
      <Text style={styles.button}>Count: {count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#fff",
    height: 500,
    fontSize: 100,
    fontWeight: "bold"
  },

  button: {
    color: "#fff",
    height: 100,
    fontSize: 50,
    fontWeight: "bold"
  },
});
