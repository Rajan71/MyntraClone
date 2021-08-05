import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Alert
} from 'react-native';
import Bag from './Bag';
import ShoppingBag from './ShoppingBag';
import { useDispatch, useSelector } from "react-redux";


const AddToBag = ({ navigation }) => {
    const { image, cartItems, deleteItem } = useSelector(state => state.UpdateCartReducer)
    if (cartItems != '') {
        return <Bag navigation={navigation} />
    }
    else {
        return <ShoppingBag navigation={navigation} />
    }
}

export default AddToBag;

