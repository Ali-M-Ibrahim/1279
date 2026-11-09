import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Person from './screens/Person/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello class, I am Ali</Text>
      <Person name="Joe Doe" age="20" />
      <Person name="Jane Doe" age="30" />
      <Person name="Test Doe" age="50" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
