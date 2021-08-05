import React from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';
import { Color, Vw, Vh } from '../helper'

const List = (props) => {
    return (
        <FlatList
            numColumns={props.numColumns}
            horizontal={props.horizontal}
            data={props.data}
            renderItem={props.renderItem}
            keyExtractor={props.keyExtractor}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={props.ItemSeparatorComponent}
            contentContainerStyle={props.contentContainerStyle}
            extraData={props.extraData}
            contentContainerStyle={props.contentContainerStyle}
        />
    )
}

export default List;