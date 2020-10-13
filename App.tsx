import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Map, Modal, Panel } from './components';

export default function App() {
const [points, setPoints] = useState<any[]>([]);

  const handleLongPress = ({nativeEvent}: any) => {
    points.push({ coordinate: nativeEvent.coordinate });
    setPoints(points);
  }
  return (
    <View style={styles.container}>
      <Map style={styles.map} onLongPress={handleLongPress}/>
      <Panel style={styles.panel}/>
      <Modal visibility={false}>
        <Text>MODAL REFACTORED</Text>
        </Modal>
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
