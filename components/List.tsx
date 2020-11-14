import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

export default ({ data, onPress }: any) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }: any) => <ListItem onPress={onPress} item={item} />}
            keyExtractor={(item: any) => item.name}
        />
    );
}

