import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

export default (props: any) => {
    const { children, visibility} = props;
    return (<Modal
        animationType="fade"
        transparent={true}
        visible={visibility}>
        <View style={styles.modalBackground}>
            <View style={styles.modalView}>
                <Text>
                    {children}
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
});