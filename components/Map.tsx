import React from 'react';
import MapView, { Marker } from 'react-native-maps';

export default ({ style, onLongPress, points, pointsFilter }: any) => {
    const displayPointsMarkers = (point: any) => {
        return (
            <Marker 
                title={point.name}
                coordinate={point.coordinates} 
                key={point.name}/>
        );
    };
    return (
        <MapView style={style} onLongPress={onLongPress} >
            {pointsFilter && points.map(displayPointsMarkers)}
        </MapView>
    )
}
