import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

export default () => {
    return (<Modal
        animationType="fade"
        transparent={true}
        visible={false}>
        <View style={styles.modalBackground}>
            <View style={styles.modalView}>
                <Text>
                    Modal...!!
                </Text>
            </View>
        </View>
    </Modal>)
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: '#FFF',
        borderRadius: 4,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            height: 20,
            width: 0
        }
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
});