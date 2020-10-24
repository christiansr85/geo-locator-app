import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Dimensions, StyleSheet, View } from 'react-native';
import { Input, Map, Modal, Panel } from './components';

export default function App() {
  const [points, setPoints] = useState<any[]>([]);
  const [pointName, setPointName] = useState<string>('');
  const [pointTemp, setPointTemp] = useState<any>({});
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  const handleLongPress = ({ nativeEvent }: any) => {
    setPointTemp(nativeEvent.coordinate);
    setDisplayModal(true);
  }

  const handleOnChangeText = (text: string) => setPointName(text);
  const handleOnSubmit = () => {
    const point = { coordinates: pointTemp, name: pointName };
    setPoints([...points, point]);
    setDisplayModal(false);
    setPointName('');
  }

  return (
    <View style={styles.container}>
      <Map style={styles.map} onLongPress={handleLongPress} />
      <Panel style={styles.panel} />
      <Modal visibility={displayModal}>
        <View style={styles.modalContent}>
          <Input
            title="Name"
            placeholder="Point's name"
            onChangeText={handleOnChangeText}>
          </Input>
          <View style={styles.buttonsView}>
            <Button title="Cancel" onPress={() => setDisplayModal(false)} />
            <Button title="Accept" onPress={handleOnSubmit} />
          </View>
        </View>
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
  modalContent: {
    flex: 1,
    flexDirection: 'column',
    width: 200
  },
  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
