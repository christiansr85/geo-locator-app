import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default (props: any) => {
    const { style } = props;
    return (
        <View style={{...style, ...styles.panel}}>
            <Button title="Lista" onPress={() => Alert.alert('Lista')} />
            <Button title="Mostrar/Ocultar" onPress={() => Alert.alert('Mostrar/ocultar')} />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});
