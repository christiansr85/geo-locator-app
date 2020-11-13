import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default () => {
    return (
        <View style={styles.wrapper}>
            <Text>Points screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 40
    }
});