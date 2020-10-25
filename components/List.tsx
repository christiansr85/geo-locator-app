import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default ({ data }: any) => {
    return (
        <FlatList
            data={data.map(x => x.name)}
            renderItem={({ item }: any) => <View style={styles.listItem}><Text>{item}</Text></View>}
            keyExtractor={(item: any) => item}
        />
    );
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