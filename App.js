import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestList from './app/RestList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Lunch Spot 🍕
      </Text>
      <RestList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#22626f',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: 'white',
    fontSize: 36,
  },
});
