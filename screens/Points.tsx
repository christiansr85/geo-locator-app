import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { List } from '../components';

export default ({ navigation }: any) => {
    const points = navigation.getParam('data');
    return (
        <View style={styles.wrapper}>
            <List onPress={() => navigation.navigate('Detail') } data={points} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: Dimensions.get('window').height
    }
});