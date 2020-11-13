import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default () => {
    return (
        <View style={styles.wrapper}>
            <Text>Point detail screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 40
    }
});