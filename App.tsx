import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Map, Modal, Panel } from './components';

export default function App() {
  const handleLongPress = ({nativeEvent}: any) => {
    console.log(nativeEvent)
  }
  return (
    <View style={styles.container}>
      <Map style={styles.map} onLongPress={handleLongPress}/>
      <Panel style={styles.panel}/>
      <Modal />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  panel: {
    position: 'absolute',
    height: 100,
    width: Dimensions.get('window').width,
    bottom: 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
