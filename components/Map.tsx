import React from 'react';
import MapView from 'react-native-maps';

export default ({ style, onLongPress }: any) => {
    return (<MapView style={style} onLongPress={onLongPress} />)
}
