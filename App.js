import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tray from './app/Tray';
import RestList from './app/RestList';

export default function App() {
  const [selectRestaurant, setSelectRestaurant] = useState(null);
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>
      🍕 Lunch Spot
      </Text>
      <RestList selectRestaurant={selectRestaurant} />
      <StatusBar style="auto" />
    </View>
    <Tray setSelectRestaurant={setSelectRestaurant} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#e2f2fc',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'whitesmoke',
    width: '100%',
    height: 115,
    marginTop: -60,
    marginBottom: -15,
    paddingTop: 55,
    paddingBottom: 20,
    
  
    fontSize: 36,
    fontWeight: 700,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
