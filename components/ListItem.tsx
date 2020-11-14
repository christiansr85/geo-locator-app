import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default ({ item, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.listItem}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 40,
        justifyContent: 'center',
        alignContent: 'center'
    }
});